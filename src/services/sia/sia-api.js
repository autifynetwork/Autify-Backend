//
// -- Sia Api - HTTP REST API Wrapper for Sia
//

module.exports = Sia;

var _ = require("underscore");
var request = require("request");

function Sia(config) {
	var self = this;
	var host_ = config.host;	
	var timeout_ = config.timeout || 60 * 1000;
	var verbose = config.verbose || false;
	
	self.requestOptions = [ ]

	var defs = [
		"get:/daemon/constants",
		"get:/daemon/stop",
		"get:/daemon/version",

		"get:/consensus",

		"get:/explorer",
		"get:/explorer/blocks/*",
		"get:/explorer/hashes/*",

		"get:/gateway",
		"post:/gateway/connect/*",
		"post:/gateway/disconnect/*",

		"get:/host",
		"post:/host",
		"post:/host/announce",
		"post:/host/delete/*",
		"get:/host/storage",
		"post:/host/storage/folders/add",
		"post:/host/storage/remove/add",
		"post:/host/storage/resize/add",
		"post:/host/storage/sectors/delete/*",
		
		"get:/hostdb/active",
		"get:/hostdb/all",

		"get:/miner",
		"get:/miner/start",
		"get:/miner/stop",
		"get:/miner/header",
		"post:/miner/header",

		"get:/renter/allowance",
		"post:/renter/allowance",
		"get:/renter/downloads",
		"get:/renter/files",
		"post:/renter/load",
		"post:/renter/loadascii",
		"get:/renter/share",
		"get:/renter/shareascii",
		"post:/renter/delete/*",
		"get:/renter/download/*",
		"post:/renter/rename/*",
		"post:/renter/upload/*",

		"get:/wallet",
		"get:/wallet/address",
		"get:/wallet/addresses",
		"get:/wallet/backup",
		"post:/wallet/init",
		"post:/wallet/lock",
		"post:/wallet/seed",
		"get:/wallet/seeds",
		"post:/wallet/siacoins",
		"post:/wallet/siafunds",
		"post:/wallet/siagkey",
		"get:/wallet/transaction/*",
		"get:/wallet/transactions/+",
		"post:/wallet/unlock",
	]

	var ARGS_IN_PATH_REQ = 1;
	var ARGS_IN_PATH_OPT = 2;

	self.ifacePathMap = { }
	var iface = { }

	_.each(defs, function(op) {
	
		var p = op.split(':');
		var method = p.shift();
		var path = p.shift();
		var parts = path.split('/');
		parts.shift();

		var argsInPath = null;
		if(parts[parts.length-1] == '*') {
			argsInPath = ARGS_IN_PATH_REQ;
			parts.pop();
			path = '/'+parts.join('/');
		}
		else
		if(parts[parts.length-1] == '+') {
			argsInPath = ARGS_IN_PATH_OPT;
			parts.pop();
			path = '/'+parts.join('/');
		}


		var last = iface;
		var part = parts.shift();
		while(part) {
			if(parts.length) {
				if(!last[part])
					last[part] = { }
				last = last[part];
				part = parts.shift();
			}
			else {
				var fn = config.rpcClient ? createProxyFn(method,path) : createFn(method,path,argsInPath);
								
				if(!last[part])
					last[part] = fn;//{ }
				last[part][method] = fn;
				part = null;

				if(!self.ifacePathMap[path])
					self.ifacePathMap[path] = { }
				self.ifacePathMap[path][method] = fn;
			}
		}

		_.each(iface, function(o, n) {
			self[n] = o;
		})

	})

	function createProxyFn(method, path) {

		var fn = function() {

			var args = Array.prototype.slice.apply(arguments);

			var callback = args.pop();
			if(!_.isFunction(callback)) {
				console.log("No callback supplied to Sia function "+path);
				throw new Error("No callback");
			}

			var dispatchArgs = [{
				op : 'sia-rpc',
				method : method,
				path : path,
				args : args
			}, callback]
			
			if(config.rpcUUID)
				dispatchArgs.unshift(config.rpcUUID);

			config.rpcClient.dispatch.apply(config.rpcClient, dispatchArgs);
		}

		return fn;
	}

	function createFn(method, path, argsInPath) {

		var url = host_+path;

		var options = {
            json : true,
            headers : {
            	"User-Agent" : "Sia-Agent"
            },
            timeout : timeout_
		}

		var fn = function() {

			options.url = url;

			while(self.requestOptions.length) {
				var o = self.requestOptions.shift();
				_.extend(options, o);
			}

			var args = Array.prototype.slice.apply(arguments);

			var callback = args.pop();
			if(!_.isFunction(callback)) {
				console.log("No callback supplied to Sia function "+path);
				throw new Error("No callback");
			}

			if(argsInPath == ARGS_IN_PATH_REQ && !args.length) {
				console.log("No sub-path supplied to Sia function "+path);
				return callback("No sub-path");
			}
			else
			if(argsInPath && args.length) {
				var path = args.shift();
				options.url += path.charAt(0) == '/' ? path : '/'+path;
			}			

			if(method == "get") {
				options.method = "GET";
				if(args.length)
				options.qs = args.shift();
			}
			else {
				options.method = "POST";
				options.form = args.shift();
			}

			
			var requestOptions = args.pop();
			if (requestOptions && _.isObject(requestOptions)){
				if(requestOptions.timeout)
					options.timeout = requestOptions.timeout;
				if(requestOptions.headers)
					_.extend(options.headers, requestOptions.headers);
			}

			verbose && console.log('-->',options);

			request(options, function(err, response, body) {

				if(verbose) {
					console.log('statusCode:', response.statusCode);
					if(err)
						console.log('Error:',err);
					else
						console.log('Response:',body);
				}

	            if(err) 
	                return callback(err);

	            // accept successful response (200-206)
			    if(response.statusCode < 200 || response.statusCode > 206)
			        return callback('Invalid Status Code Returned: ' + response.statusCode);
		
			    callback(null, body);
	        })

	    }

	    return fn;
	}

	// --- iris-rpc bindings

	config.rpcServer && config.rpcServer.on('set-sia-host', function(op, callback) {
		self.setSiaHost(op.host);
		callback && callback();
	})

	config.rpcServer && config.rpcServer.on('sia-rpc', function(op, callback) {
		if(!op.method || !op.path)
			return callback("Missing method and path arguments");

		fn = self.ifacePathMap[op.path][op.method];
		if(!fn)
			return callback("No such method '"+op.method+"' in path '"+op.path+"'");

		var args = op.args || [ ];
		args.push(callback);		
		fn.apply(self, args);
	})

	// --- utility functions

	self.setSiaHost = function(host) {
		host_ = host;
	}
}

//
// helper function - adds toFileSize() to a Number Object
// Use: 
//		toFileSize() to get GiB
//		toFileSize(true) to get GB
//
Object.defineProperty(Number.prototype, 'toFileSize', {
    value: function(a, asNumber){
        var b,c,d;
        var r = (
            a=a?[1e3,'k','B']:[1024,'K','iB'],
            b=Math,
            c=b.log,
            d=c(this)/c(a[0])|0,this/b.pow(a[0],d)
        ).toFixed(2)

        if(!asNumber){
            r += ' '+(d?(a[1]+'MGTPEZY')[--d]+a[2]:'Bytes');
        }
        return r;
    },
    writable:false,
    enumerable:false
});

//
// helper function - adds toSia() to a Number Object
// Use: 
// 		toSia(2) to get 12.34 KS
//		toSia(2,'SC') to get 1234 SC
//		toSia(2,'SC', true) to get 1,234 SC
//
Object.defineProperty(Number.prototype, 'toSia', {
    value: function(precision, suffix, c) {

		var l = [
			[1e36, 'TS'],
			[1e33, 'GS'],
			[1e30, 'MS'],
			[1e27, 'KS'],
			[1e24, 'SC'],
			[1e21, 'mS'],
			[1e18, 'uS'],
			[1e15, 'nS'],
			[1e12, 'pS'],
			[1e9, 'H']
		];

		var i = 0;
		if(suffix) {
			while(i < l.length-1 && suffix != l[i][1])
				i++;

		}
		else {
			while(i < l.length-1 && (this) < l[i][0])
				i++;
			suffix = l[i][1];
		}

		var v = this / l[i][0];
		
		if(c) {
			var parts = v.toFixed(precision || 2).toString().split('.');
		    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return parts.join('.') + ' ' + suffix;
		}
		else {
			return v.toFixed(precision || 2) + ' ' + suffix;
		}
    },
    writable:false,
    enumerable:false
});


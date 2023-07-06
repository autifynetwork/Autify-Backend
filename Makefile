deps:
	direnv reload
    ./update-env-ip.sh
	docker compose -f docker-compose.yml up  -d

stop:
	docker-compose -f docker-compose.yml down

down: destroy
destroy:
	docker compose -f docker-compose.yml down -v
	docker compose -f docker-compose.yml rm -f
logs: 
	docker compose -f docker-compose.yml logs -f

.PHONY: deps stop down destroy logs
import { createServer } from 'http'

import express from 'express'
import baseLogger from '@services/logger'
import helmet from 'helmet'
import PinoHttp from 'pino-http'

import { ApolloServer } from 'apollo-server-express'
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageDisabled,
    ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core'

const startServer = () => {
    const app = express()
    const port = process.env.APP_PORT || 4000

    app.get('/healthz', (_, r) => r.sendStatus(200))
    app.listen(port, () =>
        baseLogger.info('🚀 Server listening on port ' + port)
    )
}

if (require.main === module) {
    startServer()
}

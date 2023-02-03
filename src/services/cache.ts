import Redis from 'ioredis'

import baseLogger from '@services/logger'

const redis = new Redis(process.env.REDIS_URL as string)

redis.on('connect', () => {
    baseLogger.info('Redis is Connected')
})

export default redis

import AWS from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config({ override: true })

export * from './yaml'

export const APP_PORT = parseInt(process.env.APP_PORT || '4000')

export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'

export const redisUrl = process.env.REDIS_URL || ''

export const awsConfig = () => {
    const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env

    AWS.config.update({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        region: AWS_REGION,
    })

    return new AWS.S3()
}

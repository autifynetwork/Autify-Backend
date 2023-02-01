import dotenv from 'dotenv'
dotenv.config({ override: true })

export * from './yaml'

export const APP_PORT = parseInt(process.env.APP_PORT || '4000')

export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'

export const sendgridConfig: SendgridConfig = {
    sendgrid_api: process.env.SENDGRID_API_KEY || '',
    email_id: process.env.EMAIL_ID || '',
}

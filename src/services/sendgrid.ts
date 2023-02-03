import sgMail from '@sendgrid/mail'
import { sendgridConfig } from '@config'
import { sendgridLogger } from '@services/logger'

sgMail.setApiKey(sendgridConfig.sendgrid_api)

export const sendMail = async (to: string, otp: string) => {
    try {
        await sgMail.send({
            from: sendgridConfig.email_id,
            to,
            subject: 'Autify Authentication',
            text: `Your Authentication Code is ${otp}`,
            html: `<p>Your Authentication Code is ${otp}</p>`,
        })
    } catch (error) {
        sendgridLogger.error({ error, to })
        throw error
    }

    sendgridLogger.info('Email sent successfully', { to, otp })
    return true
}

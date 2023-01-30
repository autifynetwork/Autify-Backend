import sgMail from '@sendgrid/mail'
import { sendgridConfig } from '@config'
import { sendgridLogger } from '@services/logger'

sgMail.setApiKey(sendgridConfig.sendgrid_api)

export const sendMail = async (to: string, text: string) => {
    try {
        await sgMail.send({
            from: sendgridConfig.email_id,
            to,
            subject: 'Autify Authentication',
            text,
            html: `<p>${text}</p>`,
        })
    } catch (error) {
        sendgridLogger.error({ error, to, text })
        throw error
    }

    sendgridLogger.info('Email sent successfully', { to, text })
    return true
}

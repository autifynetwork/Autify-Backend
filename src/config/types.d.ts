type ApolloConfig = {
    playground: boolean
    introspection: boolean
}

type SendgridConfig = {
    sendgrid_api: string
    email_id: string
}

type EmailConfig = {
    otp: {
        length: number
        expiration_time: string
    }
}

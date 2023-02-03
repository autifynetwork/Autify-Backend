import crypto from 'crypto'

import ms from 'ms'

import redis from '@services/cache'
import { emailotp } from '@config'

type CachedOTPSpec = {
    otp: string
    eat: number
}

export const createOTP = async (identifier: string): Promise<string> => {
    const otp_numeric = crypto.randomInt(0, Math.pow(10, emailotp.length))
    const otp = otp_numeric.toString().padStart(emailotp.length, '0')

    const detonate = ms(emailotp.expiration_time)

    const cached_otp: CachedOTPSpec = {
        otp,
        eat: Date.now() + detonate,
    }

    await redis.set(identifier, JSON.stringify(cached_otp))

    return otp
}

export const matchOTP = async (identifier: string, otp: string): Promise<boolean> => {
    const saved = await redis.get(identifier)

    if (!saved) return false

    const { otp: saved_otp, eat }: CachedOTPSpec = JSON.parse(saved)

    if (eat < Date.now()) {
        await redis.del(identifier)
        return false
    }

    return otp === saved_otp
}

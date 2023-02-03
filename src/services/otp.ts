import crypto from 'crypto'

import ms from 'ms'

import redis from '@services/cache'
import { otp as otpConfig } from '@config'

type CachedOTPSpec = {
    otp: string
    eat: number
}

export const createOTP = async (identifier: string): Promise<string> => {
    const otp_numeric = crypto.randomInt(0, 1000000)
    const otp = otp_numeric.toString().padStart(6, '0')

    const detonate = ms(otpConfig.expiration_time)

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

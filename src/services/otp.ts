import crypto from 'crypto'

import ms from 'ms'

import redis from '@services/cache'
import { otp as otpConfig } from '@config'

type CachedOTPSpec = {
    otp: string
    eat: number
    retries: number
}

export const createOTP = async (identifier: string): Promise<string> => {
    const saved = await redis.get(identifier)

    // In Cache
    if (saved) return (JSON.parse(saved) as CachedOTPSpec).otp

    const otp_numeric = crypto.randomInt(0, Math.pow(10, otpConfig.length))
    const otp = otp_numeric.toString().padStart(otpConfig.length, '0')

    console.log(otp)
    console.log(otpConfig.length)

    const detonate = ms(otpConfig.expiration_time)
    const cached_otp: CachedOTPSpec = {
        otp,
        eat: Date.now() + detonate,
        retries: 0,
    }

    await redis.set(identifier, JSON.stringify(cached_otp), 'PX', detonate)

    return otp
}

export const matchOTP = async (identifier: string, otp: string): Promise<boolean> => {
    const saved = await redis.get(identifier)

    if (!saved) return false

    const cached: CachedOTPSpec = JSON.parse(saved)

    // if retries or expired
    if (cached.retries >= otpConfig.retries || cached.eat < Date.now()) {
        await redis.del(identifier)
        return false
    }

    // if passed
    if (otp === cached.otp) {
        await redis.del(identifier)
        return true
    }

    // If Failed
    cached.retries++
    await redis.set(identifier, JSON.stringify(cached), 'PX', cached.eat)

    return false
}

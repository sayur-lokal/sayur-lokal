import jwt from 'jsonwebtoken'

export const ACCESS_TOKEN_EXPIRY = '15m'
export const REFRSH_TOKEN_EXPIRY = '7d'

export const generateAccessToken = (payload: object) => {
    // IMPORTANT! remove the default secret on production
    const secret = process.env.JWT_SECRET || "test"
    if (!secret) {
        throw new Error("JWT_SECRET is not set")
    }

    return jwt.sign(payload, secret, {expiresIn: ACCESS_TOKEN_EXPIRY})
}

export const generateRefreshToken = (payload: object): string => {
    // IMPORTANT! remove the default secret on production
    const secret = process.env.JWT_REFRESH_SECRET || "test refresh"
    if (!secret) {
        throw new Error("JWT_REFRESH_SECRET is not set")
    }

    return jwt.sign(payload, secret, {expiresIn: REFRSH_TOKEN_EXPIRY})
}
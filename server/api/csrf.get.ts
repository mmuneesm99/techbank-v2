import { randomBytes } from 'crypto'

export default defineEventHandler(async (event) => {
    try {
        // Generate a random token
        const token = randomBytes(32).toString('hex')
        
        // Set the token in a cookie
        setCookie(event, 'csrf-token', token, {
            httpOnly: false, // Allow JavaScript to read the token
            secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
            sameSite: 'lax', // Protect against CSRF while allowing normal navigation
            path: '/', // Available on all paths
            maxAge: 3600 // Token valid for 1 hour
        })

        return { token }
    } catch (error) {
        console.error('CSRF token generation failed:', error)
        throw createError({
            statusCode: 500,
            message: 'Failed to generate CSRF token'
        })
    }
}) 
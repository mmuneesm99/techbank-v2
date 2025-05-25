import { sendEmail } from '../utils/mailer'
import { randomBytes } from 'crypto'

export default defineEventHandler(async (event) => {
    try {
        // Validate CSRF token
        const csrfToken = getHeader(event, 'x-csrf-token')
        const cookieToken = getCookie(event, 'csrf-token')

        if (!csrfToken || !cookieToken || csrfToken !== cookieToken) {
            throw createError({
                statusCode: 403,
                message: 'Invalid CSRF token'
            })
        }

        const body = await readBody(event)
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'message']
        const missingFields = requiredFields.filter(field => !body[field])
        
        if (missingFields.length > 0) {
            throw createError({
                statusCode: 400,
                message: `Missing required fields: ${missingFields.join(', ')}`
            })
        }

        // Send email
        await sendEmail('contact', body)

        return {
            success: true,
            message: 'Message sent successfully! We will get back to you soon.'
        }
    } catch (error: any) {
        console.error('Contact form error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to send message'
        })
    }
}) 
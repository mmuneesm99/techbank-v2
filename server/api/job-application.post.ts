import { sendEmail } from '../utils/mailer'

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

        const formData = await readMultipartFormData(event)
        if (!formData) {
            throw createError({
                statusCode: 400,
                message: 'No form data provided'
            })
        }

        const data: Record<string, string> = {}
        let resume: any = null

        for (const part of formData) {
            if (part.name === 'resume') {
                resume = part
            } else if (part.name) {
                data[part.name] = part.data.toString()
            }
        }

        // Validate required fields
        const requiredFields = ['name', 'email', 'phone', 'position', 'experience', 'message']
        const missingFields = requiredFields.filter(field => !data[field])
        
        if (missingFields.length > 0) {
            throw createError({
                statusCode: 400,
                message: `Missing required fields: ${missingFields.join(', ')}`
            })
        }

        // Validate resume
        if (!resume) {
            throw createError({
                statusCode: 400,
                message: 'Resume is required'
            })
        }

        // Validate resume size (10MB max)
        if (resume.data.length > 10 * 1024 * 1024) {
            throw createError({
                statusCode: 400,
                message: 'Resume size should not exceed 10MB'
            })
        }

        // Validate resume type
        if (resume.type !== 'application/pdf') {
            throw createError({
                statusCode: 400,
                message: 'Only PDF files are allowed for resume upload'
            })
        }

        // Send email
        await sendEmail('jobApplication', {
            ...data,
            resume
        })

        return {
            success: true,
            message: 'Application submitted successfully'
        }
    } catch (error: any) {
        console.error('Job application error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to submit application'
        })
    }
}) 
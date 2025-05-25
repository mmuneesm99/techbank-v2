import nodemailer from 'nodemailer'

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // use SSL/TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
    }
})

// Email templates
const emailTemplates = {
    contact: (data: any) => ({
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #333; border-bottom: 2px solid #9334F8; padding-bottom: 10px;">New Contact Form Submission</h2>
                <div style="background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <p><strong style="color: #9334F8;">Name:</strong> ${data.name}</p>
                    <p><strong style="color: #9334F8;">Email:</strong> ${data.email}</p>
                    <p><strong style="color: #9334F8;">Phone:</strong> ${data.phone || 'Not provided'}</p>
                    <p><strong style="color: #9334F8;">Message:</strong></p>
                    <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message}</p>
                </div>
                <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                    <p>This email was sent from the contact form on TechBank website.</p>
                </div>
            </div>
        `,
    }),
    jobApplication: (data: any) => ({
        subject: `New Job Application for ${data.position}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #333; border-bottom: 2px solid #9334F8; padding-bottom: 10px;">New Job Application</h2>
                <div style="background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <p><strong style="color: #9334F8;">Name:</strong> ${data.name}</p>
                    <p><strong style="color: #9334F8;">Email:</strong> ${data.email}</p>
                    <p><strong style="color: #9334F8;">Phone:</strong> ${data.phone}</p>
                    <p><strong style="color: #9334F8;">Position:</strong> ${data.position}</p>
                    <p><strong style="color: #9334F8;">Experience:</strong> ${data.experience} years</p>
                    <p><strong style="color: #9334F8;">Message:</strong></p>
                    <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message}</p>
                    ${data.resume ? `<p><strong style="color: #9334F8;">Resume:</strong> Attached (${data.resume.name})</p>` : ''}
                </div>
                <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                    <p>This email was sent from the job application form on TechBank website.</p>
                </div>
            </div>
        `,
    }),
}

// Send email function
export const sendEmail = async (type: 'contact' | 'jobApplication', data: any) => {
    try {
        const template = emailTemplates[type](data)
        const mailOptions = {
            from: `"TechBank Website" <${process.env.SMTP_FROM}>`,
            to: type === 'contact' ? process.env.CONTACT_EMAIL : process.env.CAREERS_EMAIL,
            subject: template.subject,
            html: template.html,
            attachments: data.resume ? [
                {
                    filename: data.resume.name,
                    content: data.resume.data,
                    contentType: data.resume.type
                },
            ] : [],
        }

        const info = await transporter.sendMail(mailOptions)
        return { success: true, messageId: info.messageId }
    } catch (error) {
        console.error('Email sending failed:', error)
        throw new Error('Failed to send email')
    }
} 
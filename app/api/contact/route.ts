import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, requirements } = body

    // Validate required fields
    if (!name || !email || !phone || !requirements) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Format email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Project Requirements:
${requirements}

---
Sent from LKF Contracting website
`

    // Send email using Resend or similar service
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, phone })

    // In a production environment, you would integrate with:
    // - Resend API (resend.com)
    // - SendGrid
    // - AWS SES
    // - Or your preferred email service

    return NextResponse.json(
      { success: true, message: 'Thank you for your enquiry. We will be in touch soon!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}

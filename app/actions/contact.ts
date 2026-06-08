'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactSchema.parse(formData)

    // In a real application, you would send this email using a service like Resend, SendGrid, or AWS SES
    // For now, we'll log it and return a success message
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Return success response
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your form entries and try again.',
        errors: error.flatten().fieldErrors,
      }
    }

    return {
      success: false,
      message: 'An error occurred while sending your message. Please try again.',
    }
  }
}

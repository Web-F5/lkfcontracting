'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('https://formspree.io/f/xkoarnna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.requirements,
        }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Thank you! We will be in touch soon.' })
        setFormData({ name: '', email: '', phone: '', requirements: '' })
      } else {
        const result = await response.json()
        setMessage({ type: 'error', text: result?.errors?.[0]?.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us about your project and we&apos;ll provide a detailed quote
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday—Friday:<br />7:00am—5:00pm<br />
                Saturday:<br />8:00am—12:00pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="04** *** ***"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-semibold text-charcoal mb-2">
                Project Requirements *
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Tell us about your project, paddock size, and any specific requirements..."
                required
                disabled={isLoading}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden resize-none"
              />
            </div>

            {message && (
              <div className={`flex items-start gap-3 p-4 rounded-lg ${message.type === 'success'
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
                }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p className={`text-sm font-medium ${message.type === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}>
                  {message.text}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-golden text-charcoal px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Enquiry'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              * Required fields. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
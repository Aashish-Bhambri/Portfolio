import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please try again later.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          contact_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      )
      setFormData({ name: '', email: '', message: '' })
      setStatus({
        type: 'success',
        message: "Thank you! Your message has been sent. I'll get back to you promptly.",
      })
    } catch (error) {
      console.error('Failed to send contact form message with EmailJS:', error)
      const errorDetails = error instanceof EmailJSResponseStatus
        ? `EmailJS error ${error.status}: ${error.text}`
        : error instanceof Error
          ? error.message
          : 'Check the browser console for details.'
      setStatus({
        type: 'error',
        message: `Your message could not be sent. ${errorDetails}`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[0.95] break-words'>
        LET'S WORK<br />
        <span className='text-content-ghost'>TOGETHER</span>
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-5 max-w-2xl'>
        {status && (
          <div
            role={status.type === 'error' ? 'alert' : 'status'}
            aria-live={status.type === 'error' ? 'assertive' : 'polite'}
            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold ${
              status.type === 'success'
                ? 'bg-accent-lime/10 border-accent-lime/30 text-accent-lime'
                : 'bg-red-500/10 border-red-400/30 text-red-300'
            }`}
          >
            {status.type === 'success' && <CheckCircle2 className='w-5 h-5 flex-shrink-0' />}
            <span>{status.message}</span>
          </div>
        )}

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
            Name
            <input
              required
              name='from_name'
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                setStatus(null)
              }}
              placeholder='Your Name'
              autoComplete='name'
              className='bg-surface border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/25 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/40 focus:outline-none transition-all text-sm'
            />
          </label>

          <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
            Email
            <input
              required
              name='contact_email'
              type='email'
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                setStatus(null)
              }}
              placeholder='your.email@example.com'
              autoComplete='email'
              className='bg-surface border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/25 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/40 focus:outline-none transition-all text-sm'
            />
          </label>
        </div>

        <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
          Message
          <textarea
            required
            name='message'
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
              setStatus(null)
            }}
            placeholder='Tell me about your project, team, or opportunity...'
            className='bg-surface border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/25 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/40 focus:outline-none transition-all text-sm resize-none'
          />
        </label>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full sm:w-auto bg-accent-orange hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed font-bold text-white py-3.5 px-8 rounded-xl transition-all self-start cursor-pointer shadow-lg shadow-accent-orange/20 flex items-center justify-center gap-2 mt-2'
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          {!isSubmitting && <Send className='w-4 h-4' />}
        </button>
      </form>
    </div>
  )
}

export default Contact

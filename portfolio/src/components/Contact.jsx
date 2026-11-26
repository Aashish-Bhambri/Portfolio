import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email address, and message before sending.',
      })
      return
    }

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env
    const hasConfig = [
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    ].every((value) => Boolean(value?.trim()))

    if (!hasConfig) {
      setStatus({
        type: 'error',
        message: 'The contact form is temporarily unavailable on this deployment.',
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
          name: trimmedName,
          email: trimmedEmail,
          from_name: trimmedName,
          from_email: trimmedEmail,
          contact_email: trimmedEmail,
          reply_to: trimmedEmail,
          message: trimmedMessage,
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
      setStatus({
        type: 'error',
        message: 'Your message could not be sent right now. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[0.95] break-words'>
        LET&apos;S WORK<br />
        <span className='text-content-ghost'>TOGETHER</span>
      </h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-5 max-w-2xl'>
        {status && (
          <div
            role={status.type === 'error' ? 'alert' : 'status'}
            aria-live={status.type === 'error' ? 'assertive' : 'polite'}
            className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold ${status.type === 'success'
              ? 'bg-accent-lime/10 border-accent-lime/30 text-accent-lime'
              : 'bg-red-500/10 border-red-400/30 text-red-300'
              }`}
          >
            {status.type === 'success' && <CheckCircle2 className='w-5 h-5 flex-shrink-0' aria-hidden='true' />}
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
              className='bg-surface border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/55 focus:border-accent-orange focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent-orange transition-colors text-sm'
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
              className='bg-surface border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/55 focus:border-accent-orange focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent-orange transition-colors text-sm'
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
            className='bg-surface border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/55 focus:border-accent-orange focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent-orange transition-colors text-sm resize-none'
          />
        </label>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full sm:w-auto bg-accent-orange hover:brightness-105 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed font-bold text-[#151312] py-3.5 px-8 rounded-xl transition-all self-start cursor-pointer shadow-lg shadow-accent-orange/20 flex items-center justify-center gap-2 mt-2'
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          {!isSubmitting && <Send className='w-4 h-4' aria-hidden='true' />}
        </button>
      </form>
    </motion.div>)
}

export default Contact

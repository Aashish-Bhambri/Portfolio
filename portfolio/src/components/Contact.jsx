import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 4000)
  }

  return (
    <div>
      <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[0.95] break-words'>
        LET'S WORK<br />
        <span className='text-content-ghost'>TOGETHER</span>
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-5 max-w-2xl'>
        {isSubmitted && (
          <div className='flex items-center gap-3 p-4 rounded-2xl bg-accent-lime/10 border border-accent-lime/30 text-accent-lime text-sm font-semibold'>
            <CheckCircle2 className='w-5 h-5 flex-shrink-0' />
            <span>Thank you! Your message has been received. I'll get back to you promptly.</span>
          </div>
        )}

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
            Name
            <input
              required
              name='Name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder='Your Name'
              className='bg-surface border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/25 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/40 focus:outline-none transition-all text-sm'
            />
          </label>

          <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
            Email
            <input
              required
              name='Email'
              type='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder='your.email@example.com'
              className='bg-surface border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/25 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/40 focus:outline-none transition-all text-sm'
            />
          </label>
        </div>

        <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
          Message
          <textarea
            required
            name='Message'
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder='Tell me about your project, team, or opportunity...'
            className='bg-surface border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/25 focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/40 focus:outline-none transition-all text-sm resize-none'
          />
        </label>

        <button
          type='submit'
          className='w-full sm:w-auto bg-accent-orange hover:brightness-110 active:scale-[0.98] font-bold text-white py-3.5 px-8 rounded-xl transition-all self-start cursor-pointer shadow-lg shadow-accent-orange/20 flex items-center justify-center gap-2 mt-2'
        >
          <span>Send Message</span>
          <Send className='w-4 h-4' />
        </button>
      </form>
    </div>
  )
}

export default Contact

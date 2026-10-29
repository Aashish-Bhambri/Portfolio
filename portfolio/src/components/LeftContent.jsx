import React from 'react'

const LeftContent = () => {
  const handleContactClick = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', '#contact')
    }
  }

  return (
    <aside
      aria-label='Profile Summary'
      className='w-full max-w-full sm:max-w-[420px] lg:w-[380px] xl:w-[420px] flex flex-col justify-center lg:sticky lg:top-2 lg:h-screen flex-shrink-0 z-30 lg:mt-20'
    >
      <div className='w-full bg-white rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl border border-black/5'>
        <div>
          {/* Top Header: Monogram Avatar + Status Badge */}
          <div className='flex items-center justify-between mb-5'>
            <div className='w-12 h-12 rounded-2xl overflow-hidden shadow-md border border-black/5 flex-shrink-0 bg-[#151312]'>
              <img src='/favicon.svg' alt='AB Monogram Logo' className='w-full h-full object-cover' />
            </div>
            <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5ff41]/15 border border-[#c5ff41]/40 text-[#2f5c00] text-xs font-semibold'>
              <span className='w-2 h-2 rounded-full bg-[#65a30d] animate-pulse'></span>
              Available for Hire
            </div>
          </div>

          {/* Name & Title */}
          <div className='flex flex-col gap-1 mb-3'>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-[#151312] tracking-tight'>
              Aashish Bhambri
            </h2>
            <p className='text-accent-orange font-bold text-xs sm:text-sm tracking-wide'>
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Bio */}
          <p className='text-[#555555] text-xs sm:text-sm leading-relaxed mb-5'>
            Computer Science engineer specializing in modern React 19, TypeScript, and scalable cloud-native architectures. Experienced in building autonomous LLM agents (MCP), full-stack platforms, and performant web apps.
          </p>

          {/* Key Facts / Education Info Box */}
          <div className='bg-[#faf8f5] rounded-2xl p-3.5 sm:p-4 border border-[#eeebe5] mb-5 space-y-2.5'>
            <div className='flex items-start gap-2.5'>
              <span className='text-base leading-none'>🎓</span>
              <div>
                <div className='text-xs font-bold text-[#151312]'>Chandigarh University</div>
                <div className='text-[11px] text-[#777777]'>B.E. in Computer Science • 2022 – 2026</div>
              </div>
            </div>
            <div className='flex items-start gap-2.5 pt-2 border-t border-[#e8e4dc]'>
              <span className='text-base leading-none'>📍</span>
              <div>
                <div className='text-xs font-bold text-[#151312]'>Mohali, Punjab, India</div>
                <div className='text-[11px] text-[#777777]'>Open to Remote & On-Site Roles</div>
              </div>
            </div>
          </div>

          {/* Core Tech Stack Tags */}
          <div className='mb-6'>
            <div className='text-[11px] font-mono uppercase tracking-wider text-[#999999] mb-2 font-semibold'>
              Core Technologies
            </div>
            <div className='flex flex-wrap gap-1.5'>
              {['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className='px-2.5 py-1 rounded-lg bg-[#f4f1ed] text-[#151312] text-xs font-semibold'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons & Socials */}
        <div className='flex flex-col gap-2.5 pt-3 border-t border-[#f0ece5]'>
          {/* Primary CTA */}
          <a
            href='#contact'
            onClick={handleContactClick}
            className='w-full bg-accent-orange hover:brightness-110 active:scale-[0.98] text-white font-bold py-3 px-6 rounded-xl text-center text-sm transition-all shadow-md shadow-accent-orange/20 cursor-pointer flex items-center justify-center gap-2'
          >
            <span>Get in Touch</span>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </a>

          {/* Resume Download / View Button */}
          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#151312] hover:bg-[#252220] active:scale-[0.98] text-white font-semibold text-xs transition-all shadow-sm cursor-pointer'
          >
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
            </svg>
            <span>View Resume (PDF)</span>
          </a>

          {/* Social Links */}
          <div className='flex gap-2'>
            <a
              href='https://github.com/Aashish-Bhambri'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub Profile'
              className='flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-xl bg-[#f4f1ed] hover:bg-[#e8e4dc] text-[#151312] font-semibold text-xs transition-colors'
            >
              <svg className='w-4 h-4 fill-current flex-shrink-0' viewBox='0 0 24 24'>
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
              </svg>
              <span className='truncate'>GitHub</span>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn Profile'
              className='flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-xl bg-[#f4f1ed] hover:bg-[#e8e4dc] text-[#151312] font-semibold text-xs transition-colors'
            >
              <svg className='w-4 h-4 fill-current flex-shrink-0' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z' />
              </svg>
              <span className='truncate'>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default LeftContent

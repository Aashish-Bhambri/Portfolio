import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, FileText, ImageOff, Mail, MoveUpRight } from 'lucide-react'
import { projects } from '../data/projects'

const tocSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'solution', label: 'Solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'outcome', label: 'Outcome' },
]

const isSpecificRepoUrl = (url) => {
  if (!url) return false
  try {
    const parsed = new URL(url)
    const segments = parsed.pathname.split('/').filter(Boolean)
    return parsed.hostname.includes('github.com') ? segments.length >= 2 : true
  } catch {
    return false
  }
}

const splitDualToneTitle = (title) => {
  const words = (title || 'Project Case Study').trim().split(/\s+/)
  if (words.length <= 1) return { lead: words[0], tail: '' }
  return {
    lead: words.slice(0, -1).join(' '),
    tail: words[words.length - 1],
  }
}

const ProjectDetail = ({ project, onNavigate, onBack, onContact, focusHeadingOnMount = false }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSection, setActiveSection] = useState('overview')
  const [failedImages, setFailedImages] = useState({})
  const headingRef = useRef(null)

  const slug = project?.slug || ''
  const slides = Array.isArray(project?.slides) ? project.slides : []
  const architecture = Array.isArray(project?.architecture) ? project.architecture : []
  const stack = Array.isArray(project?.stack) ? project.stack : []

  // Scroll to top and restore keyboard focus to heading when switching projects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (focusHeadingOnMount) {
      headingRef.current?.focus({ preventScroll: true })
    }
  }, [slug, focusHeadingOnMount])

  // Track which case-study section is currently in view for the Contents sidebar
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      if (nearBottom) {
        setActiveSection('outcome')
        return
      }

      const trigger = 240
      for (let i = tocSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocSections[i].id)
        if (el && el.getBoundingClientRect().top <= trigger) {
          setActiveSection(tocSections[i].id)
          return
        }
      }
      setActiveSection('overview')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  const scrollToSubsection = (e, id) => {
    e.preventDefault()
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
      el.focus({ preventScroll: true })
    }
  }

  if (!project) {
    return (
      <div className=' min-h-screen bg-canvas text-white flex items-center justify-center px-4'>
        <div className='max-w-md w-full rounded-2xl sm:rounded-3xl bg-surface border border-white/10 p-6 sm:p-8 space-y-4'>
          <h1 className='text-2xl font-extrabold uppercase tracking-tight text-white'>
            Project <span className='text-content-ghost'>Unavailable</span>
          </h1>
          <p className='text-sm text-content-secondary leading-relaxed'>
            This case study could not be loaded. Return to the project index to select another build.
          </p>
          <button
            type='button'
            onClick={onBack}
            className='inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-accent-orange text-[#151312] font-bold text-xs cursor-pointer'
          >
            <ArrowLeft className='w-4 h-4' aria-hidden='true' />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const hasMultipleProjects = projects.length > 1 && currentIndex !== -1
  const prevProject = hasMultipleProjects
    ? projects[(currentIndex - 1 + projects.length) % projects.length]
    : null
  const nextProject = hasMultipleProjects
    ? projects[(currentIndex + 1) % projects.length]
    : null

  const safeSlideIndex = slides.length > 0 ? Math.min(activeSlide, slides.length - 1) : 0
  const currentSlide = slides[safeSlideIndex]
  const isImageSlide = currentSlide?.type === 'image'
  const isLive = project.status === 'Live'
  const hasSpecificRepo = isSpecificRepoUrl(project.githubUrl)
  const { lead: titleLead, tail: titleTail } = splitDualToneTitle(project.title)

  const goPrevSlide = () => {
    if (slides.length <= 1) return
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNextSlide = () => {
    if (slides.length <= 1) return
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const handleCarouselKeyDown = (e) => {
    if (slides.length <= 1) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrevSlide()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNextSlide()
    }
  }

  const handleContactNavigation = (e) => {
    e.preventDefault()
    if (onContact) {
      onContact()
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <div className='min-h-screen bg-canvas text-white selection:bg-accent-orange selection:text-[#151312]'>
      <a
        href='#case-study-main'
        className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-accent-orange focus:text-[#151312] focus:font-bold focus:text-sm focus:shadow-lg'
      >
        Skip to main content
      </a>

      {/* Persistent Case-Study Utility Navigation */}
      <nav
        aria-label='Case study navigation'
        className='sticky top-0 z-40 bg-canvas/90 backdrop-blur-xl border-b border-white/10'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2.5'>
          <a
            href='/#projects'
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
            className='inline-flex items-center gap-2 min-h-[44px] px-2 -ml-2 rounded-xl text-xs sm:text-sm font-semibold text-content-secondary hover:text-white transition-colors'
          >
            <ArrowLeft className='w-4 h-4' aria-hidden='true' />
            <span>Back to Projects</span>
          </a>

          <div className='flex items-center gap-2'>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 min-h-[44px] px-3 sm:px-3.5 py-2 rounded-xl bg-surface hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors'
            >
              <FileText className='w-3.5 h-3.5' aria-hidden='true' />
              <span>Resume</span>
            </a>
            <a
              href='/#contact'
              onClick={handleContactNavigation}
              className='inline-flex items-center gap-1.5 min-h-[44px] px-3.5 sm:px-4 py-2 rounded-xl bg-accent-orange hover:brightness-105 active:scale-[0.98] text-[#151312] font-bold text-xs transition-all'
            >
              <Mail className='w-3.5 h-3.5' aria-hidden='true' />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </nav>

      <main id='case-study-main' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-24'>
        {/* Dual-Tone Stack Hero Title, Status & Subtitle */}
        <header className='space-y-4'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <h1
              ref={headingRef}
              tabIndex={-1}
              className='text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight leading-[0.96] focus:outline-none'
            >
              {titleLead}
              {titleTail && (
                <>
                  <br />
                  <span className='text-content-ghost'>{titleTail}</span>
                </>
              )}
            </h1>

            {project.status && (
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider border ${
                  isLive
                    ? 'bg-accent-lime/10 border-accent-lime/35 text-accent-lime'
                    : 'bg-accent-orange/15 border-accent-orange/35 text-accent-orange'
                }`}
              >
                <span
                  aria-hidden='true'
                  className={`w-2 h-2 rounded-full ${isLive ? 'bg-accent-lime' : 'bg-accent-orange'}`}
                />
                <span>{project.status}</span>
              </span>
            )}
          </div>

          <p className='text-sm sm:text-base md:text-lg text-content-secondary max-w-[68ch] leading-relaxed'>
            {project.subtitle}
          </p>
        </header>

        {/* Hero Showcase Card with Adaptive Carousel & Metadata Footer */}
        <section
          role='region'
          aria-roledescription='carousel'
          aria-label={`${project.title} showcase`}
          onKeyDown={handleCarouselKeyDown}
          className='mt-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-surface'
        >
          {/* Screen-reader announcement for slide transitions */}
          <span className='sr-only' aria-live='polite'>
            {slides.length > 0
              ? `Slide ${safeSlideIndex + 1} of ${slides.length}: ${
                  currentSlide?.caption || currentSlide?.title || project.title
                }`
              : ''}
          </span>

          {/* Media Stage: Fixed aspect on image slides only; fluid height on mobile for structured cards */}
          <div
            className={`relative bg-canvas group ${
              isImageSlide
                ? 'aspect-[16/10] sm:aspect-[16/9] overflow-hidden'
                : 'min-h-[260px] sm:aspect-[16/9] flex'
            }`}
          >
            {slides.length === 0 && (
              <div className='w-full min-h-[220px] flex flex-col items-center justify-center gap-2 p-6 text-center text-content-secondary'>
                <ImageOff className='w-6 h-6 text-content-muted' aria-hidden='true' />
                <p className='text-sm'>No visual preview available for this case study yet.</p>
              </div>
            )}

            {currentSlide?.type === 'image' && (
              !currentSlide.src || failedImages[currentSlide.src] ? (
                <div className='w-full h-full flex flex-col items-center justify-center gap-2 p-6 text-center bg-surface'>
                  <ImageOff className='w-7 h-7 text-content-secondary' aria-hidden='true' />
                  <p className='text-sm font-semibold text-white'>
                    {currentSlide.caption || project.title}
                  </p>
                  <p className='text-xs text-content-secondary'>
                    Preview image could not be loaded.
                  </p>
                </div>
              ) : (
                <img
                  src={currentSlide.src}
                  alt={currentSlide.caption || project.title}
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [currentSlide.src]: true }))
                  }
                  className='w-full h-full object-cover object-top'
                />
              )
            )}

            {currentSlide?.type === 'architecture' && (
              <div className='w-full p-5 sm:p-10 flex flex-col justify-center bg-surface'>
                <div className='text-[11px] font-mono uppercase tracking-widest text-accent-orange font-semibold mb-4'>
                  {currentSlide.title}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                  {(currentSlide.nodes || []).map((node, i) => (
                    <div
                      key={node.label}
                      className='p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between gap-1.5'
                    >
                      <div className='flex items-center justify-between'>
                        <span className='text-xs font-mono text-content-secondary'>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          aria-hidden='true'
                          className={`w-2 h-2 rounded-full ${
                            isLive ? 'bg-accent-lime/80' : 'bg-accent-orange/80'
                          }`}
                        />
                      </div>
                      <h3 className='text-sm sm:text-base font-bold text-white'>{node.label}</h3>
                      <p className='text-xs text-content-secondary leading-relaxed'>{node.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSlide?.type === 'highlights' && (
              <div className='w-full p-5 sm:p-10 flex flex-col justify-center bg-surface'>
                <div
                  className={`text-[11px] font-mono uppercase tracking-widest font-semibold mb-4 ${
                    isLive ? 'text-accent-lime' : 'text-accent-orange'
                  }`}
                >
                  {currentSlide.title}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4'>
                  {(currentSlide.stats || []).map((stat) => (
                    <div
                      key={stat.label}
                      className='p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between gap-2'
                    >
                      <div className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
                        {stat.value}
                      </div>
                      <p className='text-xs text-content-secondary leading-relaxed'>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prev / Next Controls — always visible on touch/tablet, hover-reveal on lg+ */}
            {slides.length > 1 && (
              <>
                <button
                  type='button'
                  onClick={goPrevSlide}
                  aria-label='Previous slide'
                  className='absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-canvas/85 hover:bg-canvas border border-white/20 text-white flex items-center justify-center opacity-90 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer'
                >
                  <ChevronLeft className='w-5 h-5' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  onClick={goNextSlide}
                  aria-label='Next slide'
                  className='absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-canvas/85 hover:bg-canvas border border-white/20 text-white flex items-center justify-center opacity-90 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer'
                >
                  <ChevronRight className='w-5 h-5' aria-hidden='true' />
                </button>
              </>
            )}
          </div>

          {/* Card Footer: Visible Slide Caption + Accessible Pagination + Metadata + Actions */}
          <div className='px-5 sm:px-8 pt-4 pb-6 bg-canvas/70 border-t border-white/10 space-y-5'>
            {slides.length > 0 && (
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                <div className='flex items-center gap-2.5 min-w-0'>
                  <span className='text-[11px] font-mono text-content-secondary flex-shrink-0'>
                    {safeSlideIndex + 1} / {slides.length}
                  </span>
                  <span className='text-xs text-content-secondary truncate'>
                    {currentSlide?.caption || currentSlide?.title || project.title}
                  </span>
                </div>

                {slides.length > 1 && (
                  <div
                    role='tablist'
                    aria-label='Showcase slides'
                    className='flex items-center justify-center sm:justify-end -mx-2'
                  >
                    {slides.map((slide, idx) => {
                      const isSelected = safeSlideIndex === idx
                      return (
                        <button
                          key={slide.caption || slide.title || idx}
                          type='button'
                          role='tab'
                          aria-selected={isSelected}
                          onClick={() => setActiveSlide(idx)}
                          aria-label={`Show slide ${idx + 1}: ${slide.caption || slide.title}`}
                          className='w-11 h-11 rounded-full flex items-center justify-center cursor-pointer group/dot'
                        >
                          <span
                            aria-hidden='true'
                            className={`rounded-full transition-all ${
                              isSelected
                                ? 'w-2.5 h-2.5 bg-accent-orange'
                                : 'w-2 h-2 bg-white/30 group-hover/dot:bg-white/65'
                            }`}
                          />
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Metadata + Quick Action Row */}
            <div className='flex flex-wrap items-end justify-between gap-6 pt-1 border-t border-white/5'>
              <div className='flex flex-wrap gap-6 sm:gap-10'>
                <div>
                  <div className='text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1'>
                    Role
                  </div>
                  <div className='text-xs sm:text-sm font-semibold text-white'>
                    {project.role || 'Engineer'}
                  </div>
                </div>
                <div>
                  <div className='text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1'>
                    Timeline
                  </div>
                  <div className='text-xs sm:text-sm font-semibold text-white'>
                    {project.timeline || '—'}
                  </div>
                </div>
                <div>
                  <div className='text-[11px] font-mono uppercase tracking-wider text-content-secondary mb-1'>
                    Team
                  </div>
                  <div className='text-xs sm:text-sm font-semibold text-white'>
                    {project.team || 'Solo Build'}
                  </div>
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className='flex flex-wrap items-center gap-2.5'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-xl bg-accent-orange hover:brightness-105 active:scale-[0.98] text-[#151312] font-bold text-xs transition-all'
                    >
                      <span>Live Demo</span>
                      <MoveUpRight className='w-3.5 h-3.5' aria-hidden='true' />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={
                        hasSpecificRepo
                          ? `View ${project.title} source code on GitHub`
                          : 'View Aashish Bhambri GitHub Profile'
                      }
                      className='inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors'
                    >
                      <span>{hasSpecificRepo ? 'Source Code' : 'GitHub Profile'}</span>
                      <MoveUpRight className='w-3.5 h-3.5' aria-hidden='true' />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Two-Column Case Study Body (Sticky Contents Left, Sections Right) */}
        <div className='grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr] gap-8 lg:gap-14 mt-12 sm:mt-16 items-start'>
          {/* Left Sticky Table of Contents */}
          <aside aria-label='Table of contents' className='md:sticky md:top-20'>
            <div className='text-[11px] font-mono uppercase tracking-wider text-content-secondary font-semibold mb-3'>
              Contents
            </div>
            <nav className='flex md:flex-col gap-2 md:gap-1.5 overflow-x-auto pb-2 md:pb-0'>
              {tocSections.map((sec) => {
                const isActive = activeSection === sec.id
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSubsection(e, sec.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`text-xs sm:text-sm whitespace-nowrap inline-flex items-center min-h-[40px] md:min-h-[34px] px-3 py-1.5 md:px-0 md:py-1 rounded-lg md:rounded-none border md:border-0 transition-colors ${
                      isActive
                        ? 'text-accent-orange font-semibold bg-accent-orange/10 border-accent-orange/35 md:bg-transparent'
                        : 'text-content-secondary hover:text-white bg-surface border-white/10 md:bg-transparent'
                    }`}
                  >
                    {sec.label}
                  </a>
                )
              })}
            </nav>
          </aside>

          {/* Right Editorial Narrative */}
          <div className='space-y-12 min-w-0 max-w-[68ch]'>
            <section id='overview' tabIndex={-1} className='scroll-mt-24 space-y-3 focus:outline-none'>
              <h2 className='text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white'>
                Overview
              </h2>
              <p className='text-sm sm:text-base text-content-secondary leading-relaxed'>
                {project.overview}
              </p>
            </section>

            <section id='challenge' tabIndex={-1} className='scroll-mt-24 space-y-3 focus:outline-none'>
              <h2 className='text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white'>
                The <span className='text-content-ghost'>Challenge</span>
              </h2>
              <p className='text-sm sm:text-base text-content-secondary leading-relaxed'>
                {project.challenge}
              </p>
            </section>

            <section id='solution' tabIndex={-1} className='scroll-mt-24 space-y-3 focus:outline-none'>
              <h2 className='text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white'>
                Solution
              </h2>
              <p className='text-sm sm:text-base text-content-secondary leading-relaxed'>
                {project.solution}
              </p>
            </section>

            <section id='architecture' tabIndex={-1} className='scroll-mt-24 space-y-4 focus:outline-none'>
              <h2 className='text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white'>
                Architecture & <span className='text-content-ghost'>Stack</span>
              </h2>
              {architecture.length > 0 && (
                <ul className='divide-y divide-white/5 border-y border-white/5'>
                  {architecture.map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-3 py-3.5 text-sm sm:text-base text-content-secondary leading-relaxed'
                    >
                      <span
                        className='w-1.5 h-1.5 rounded-full bg-accent-orange mt-2.5 flex-shrink-0'
                        aria-hidden='true'
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {stack.length > 0 && (
                <div className='flex flex-wrap gap-2 pt-1'>
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 rounded-lg bg-surface border border-white/10 text-xs font-semibold text-white'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </section>

            <section
              id='outcome'
              tabIndex={-1}
              className='scroll-mt-24 space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-surface border border-white/10 focus:outline-none'
            >
              <div className='flex items-center justify-between gap-3'>
                <h2 className='text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white'>
                  Outcome
                </h2>
                {project.status && (
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                      isLive ? 'text-accent-lime' : 'text-accent-orange'
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </div>
              <p className='text-sm sm:text-base text-content-secondary leading-relaxed'>
                {project.outcome}
              </p>
            </section>

            {/* End-of-Case-Study Recruiter & Client Conversion Finale */}
            <section
              aria-label='Next steps'
              className='p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-surface border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5'
            >
              <div className='space-y-1'>
                <h2 className='text-base sm:text-lg font-bold text-white'>
                  Evaluating role fit or a project?
                </h2>
                <p className='text-xs sm:text-sm text-content-secondary leading-relaxed'>
                  Inspect the full resume PDF or send an inquiry directly.
                </p>
              </div>
              <div className='flex flex-wrap items-center gap-2.5 flex-shrink-0'>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors'
                >
                  <FileText className='w-3.5 h-3.5' aria-hidden='true' />
                  <span>View Resume (PDF)</span>
                </a>
                <a
                  href='/#contact'
                  onClick={handleContactNavigation}
                  className='inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 py-2.5 rounded-xl bg-accent-orange hover:brightness-105 active:scale-[0.98] text-[#151312] font-bold text-xs transition-all'
                >
                  <Mail className='w-3.5 h-3.5' aria-hidden='true' />
                  <span>Get in Touch</span>
                </a>
              </div>
            </section>

            {/* Bottom Project Pagination Switcher */}
            {hasMultipleProjects && prevProject && nextProject && (
              <div className='pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4'>
                <a
                  href={`/projects/${prevProject.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(prevProject.slug)
                  }}
                  className='inline-flex items-center gap-2 min-h-[44px] px-2 -ml-2 rounded-xl text-xs sm:text-sm font-medium text-content-secondary hover:text-white transition-colors'
                >
                  <ArrowLeft className='w-4 h-4' aria-hidden='true' />
                  <span>Previous: {prevProject.name}</span>
                </a>

                <a
                  href={`/projects/${nextProject.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(nextProject.slug)
                  }}
                  className='inline-flex items-center gap-2 min-h-[44px] px-2 -mr-2 rounded-xl text-xs sm:text-sm font-bold text-accent-orange hover:brightness-110 transition-all'
                >
                  <span>Next: {nextProject.name}</span>
                  <ArrowRight className='w-4 h-4' aria-hidden='true' />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectDetail

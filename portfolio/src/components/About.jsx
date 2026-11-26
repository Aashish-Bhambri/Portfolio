import { motion } from 'motion/react'
import React from 'react'

const About = () => {
  const highlights = [
    { label: 'Core Focus', value: 'React 19, TypeScript & Node.js' },
    { label: 'AI Systems', value: 'Autonomous LLM Workflows (MCP)' },
    { label: 'Measured Impact', value: '28% UI Render Speed Gain' },
  ]

  return (<>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className='flex flex-col gap-6 sm:gap-8'>
        <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] break-words'>
          FULL-STACK<br />
          <span className='text-content-ghost'>DEVELOPER</span>
        </h1>

        <div className='flex flex-col gap-4 max-w-2xl text-content-secondary text-sm sm:text-base md:text-lg leading-relaxed'>
          <p>
            Computer Science engineer (B.E. CSE &rsquo;26) and Software Engineering Intern at Webblaze Softech specializing in React 19, TypeScript, and modern full-stack web architectures.
          </p>
          <p>
            Focused on building responsive, maintainable web products and autonomous LLM agent workflows (MCP), with hands-on experience integrating REST APIs and cutting UI render times by 28% in production dashboards.
          </p>
        </div>

        <dl className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-white/10 max-w-2xl'>
          {highlights.map((item) => (
            <div key={item.label} className='flex flex-col gap-1'>
              <dt className='text-content-secondary text-[11px] font-mono uppercase tracking-wider'>
                {item.label}
              </dt>
              <dd className='text-sm sm:text-base font-bold text-white leading-snug'>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  </>
  )
}

export default About

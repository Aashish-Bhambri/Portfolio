import React from 'react'
import { motion } from 'motion/react'

const stackGroups = [
  {
    group: 'Frontend & Styling',
    items: [
      {
        name: 'React',
        des: 'Component UI Library',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Next.js 15',
        des: 'SSR & Server Components',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        lightIconBg: true,
      },
      {
        name: 'TypeScript',
        des: 'Type-Safe Development',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Tailwind CSS',
        des: 'Modern Utility Design',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
    ],
  },
  {
    group: 'Backend & Databases',
    items: [
      {
        name: 'Node.js & Express',
        des: 'REST APIs & Microservices',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'PostgreSQL',
        des: 'Relational DB & Prisma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        des: 'NoSQL & Mongoose',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    group: 'Workflow',
    items: [
      {
        name: 'Git & GitHub',
        des: 'Version Control & CI/CD',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
    ],
  },
]

const TechStack = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >      <h2 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-[0.95] break-words'>
        DEVELOPER<br />
        <span className='text-content-ghost'>STACK</span>
      </h2>

      <div className='flex flex-col gap-6 sm:gap-8'>
        {stackGroups.map((tier) => (
          <div key={tier.group} className='flex flex-col gap-3'>
            <h3 className='text-xs font-mono uppercase tracking-wider text-content-secondary font-semibold'>
              {tier.group}
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4'>
              {tier.items.map((item) => (
                <div
                  key={item.name}
                  className='bg-surface border border-white/5 p-4 sm:p-5 rounded-2xl flex items-center gap-4'
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center p-2.5 flex-shrink-0 ${item.lightIconBg
                      ? 'bg-white/90 border-white/20'
                      : 'bg-white/5 border-white/10'
                      }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      loading='lazy'
                      width={36}
                      height={36}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='font-bold text-white text-base sm:text-lg truncate'>
                      {item.name}
                    </div>
                    <p className='text-xs text-content-secondary truncate'>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default TechStack

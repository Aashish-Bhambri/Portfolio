import React from 'react'

const TechStack = () => {
  const tools = [
    {
      name: "React",
      category: "Frontend",
      des: "Component UI Library",
      badge: "Core",
      badgeColor: "text-accent-lime",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Next.js 15",
      category: "Fullstack",
      des: "SSR & Server Components",
      badge: "Framework",
      badgeColor: "text-accent-orange",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "TypeScript",
      category: "Language",
      des: "Type-Safe Development",
      badge: "Strict",
      badgeColor: "text-accent-lime",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      des: "Modern Utility Design",
      badge: "v4",
      badgeColor: "text-accent-orange",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      des: "REST APIs & Microservices",
      badge: "Backend",
      badgeColor: "text-accent-lime",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "PostgreSQL",
      category: "Database",
      des: "Relational DB & Prisma",
      badge: "SQL",
      badgeColor: "text-accent-orange",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "MongoDB",
      category: "Database",
      des: "NoSQL & Mongoose",
      badge: "NoSQL",
      badgeColor: "text-accent-lime",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Docker",
      category: "DevOps",
      des: "Containers & Environments",
      badge: "DevOps",
      badgeColor: "text-accent-orange",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
      name: "Git & GitHub",
      category: "Workflow",
      des: "Version Control & CI/CD",
      badge: "Workflow",
      badgeColor: "text-accent-lime",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }
  ]

  return (
    <div>
      <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight'>
        DEVELOPER<br />
        <span className='text-content-ghost'>STACK</span>
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tools.map((item, idx) => (
          <div
            key={idx}
            className='bg-surface border border-white/5 hover:border-accent-orange/40 hover:bg-white/[0.05] transition-all duration-300 p-5 rounded-2xl flex items-center gap-4 cursor-pointer group'
          >
            <div className='w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 flex-shrink-0 group-hover:scale-105 transition-transform'>
              <img src={item.icon} alt={item.name} className='w-full h-full object-contain filter group-hover:brightness-110' />
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center justify-between mb-1'>
                <h3 className='font-bold text-white text-base sm:text-lg truncate group-hover:text-accent-orange transition-colors'>
                  {item.name}
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <p className='text-xs text-content-secondary truncate'>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack

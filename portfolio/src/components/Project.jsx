import { MoveUpRight } from 'lucide-react'
import React from 'react'

const Project = () => {
    const projects = [
        { img: "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg?scale-down-to=512&width=2400&height=1800", name: "NajmAI", des: "SaaS Framer Template" },
        { img: "https://framerusercontent.com/images/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png?scale-down-to=512&width=2400&height=1800", name: "Damas", des: "Modern Portfolio Website" },
        { img: "https://framerusercontent.com/images/PhIxX38mhdPQ9JAYHuioKv54qpc.png?width=520&height=540", name: "XYZ Platform", des: "Full-Stack Web Application" }
    ]

    return (
        <div>
            <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight'>
                RECENT<br />
                <span className='text-content-ghost'>PROJECTS</span>
            </h1>

            <div className='flex flex-col gap-4'>
                {
                    projects.map((prj, idx) => (
                        <div 
                            key={idx} 
                            className='flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface/50 border border-white/5 hover:border-accent-orange/40 hover:bg-surface transition-all duration-300 cursor-pointer group'
                        >
                            <div className='flex items-center gap-4 sm:gap-6'>
                                <img 
                                    src={prj.img} 
                                    alt={prj.name} 
                                    className='h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-xl flex-shrink-0'
                                />
                                <div className='flex flex-col gap-1'>
                                    <span className='font-bold text-xl sm:text-2xl text-white group-hover:text-accent-orange transition-colors'>
                                        {prj.name}
                                    </span>
                                    <p className='text-sm text-content-secondary'>
                                        {prj.des}
                                    </p>
                                </div>
                            </div>
                            <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-orange/40 transition-colors'>
                                <MoveUpRight className='text-accent-orange w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Project

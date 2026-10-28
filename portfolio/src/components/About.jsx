import { ArrowRight, Layers, Layout } from 'lucide-react'
import React from 'react'

const About = () => {
    const obj = [
        { count: "03+", content: "FEATURED APPS" },
        { count: "500+", content: "HOURS CODED" },
        { count: "2026", content: "GRADUATION YEAR" }
    ]

    return (
        <div className='flex flex-col gap-8'>
            <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight'>
                FULL-STACK<br />
                <span className='text-content-ghost'>DEVELOPER</span>
            </h1>

            <p className='text-content-secondary max-w-xl text-base sm:text-lg leading-relaxed'>
                Passionate about creating intuitive and engaging user experiences.
                Specialize in transforming ideas into beautifully crafted products.
            </p>

            <div className='flex flex-wrap gap-8 sm:gap-14 py-2'>
                {
                    obj.map((item, idx) => (
                        <div key={idx} className='flex flex-col gap-1'>
                            <span className='text-4xl sm:text-5xl font-bold text-white'>{item.count}</span>
                            <p className='text-content-secondary text-xs sm:text-sm font-medium tracking-wide uppercase max-w-[120px]'>{item.content}</p>
                        </div>
                    ))
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2'>
                <div className='bg-accent-orange min-h-[170px] flex flex-col justify-between p-6 rounded-2xl text-white'>
                    <Layers className='w-7 h-7' />
                    <p className='text-xl sm:text-2xl font-bold leading-snug'>
                        DYNAMIC ANIMATION, MOTION DESIGN
                    </p>
                    <div className='flex justify-end'>
                        <ArrowRight className='w-6 h-6' />
                    </div>
                </div>

                <div className='bg-accent-lime min-h-[170px] flex flex-col justify-between p-6 rounded-2xl text-black'>
                    <Layout className='w-7 h-7' />
                    <p className='text-xl sm:text-2xl font-bold leading-snug'>
                        REACT, TYPESCRIPT, NEXT.JS, TAILWIND
                    </p>
                    <div className='flex justify-end'>
                        <ArrowRight className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

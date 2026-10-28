import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight'>
                LET'S WORK<br />
                <span className='text-content-ghost'>TOGETHER</span>
            </h1>

            <form className='flex flex-col gap-5 max-w-2xl'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
                        Name
                        <input 
                            name='Name' 
                            placeholder='Your Name'
                            className='bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-content-secondary/40 focus:border-accent-orange focus:outline-none transition-colors'
                        />
                    </label>

                    <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
                        Email
                        <input 
                            name='Email' 
                            type='email'
                            placeholder='your.email@example.com'
                            className='bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-content-secondary/40 focus:border-accent-orange focus:outline-none transition-colors'
                        />
                    </label>
                </div>

                <label className='flex flex-col gap-2 text-content-secondary text-xs font-semibold uppercase tracking-wider'>
                    Message
                    <textarea 
                        name='Message' 
                        rows={5}
                        placeholder='Tell me about your project, team, or opportunity...'
                        className='bg-surface border border-white/10 rounded-xl p-4 text-white placeholder:text-content-secondary/40 focus:border-accent-orange focus:outline-none transition-colors resize-none'
                    />
                </label>

                <button 
                    type='submit' 
                    className='bg-accent-orange hover:brightness-110 font-bold text-white py-3.5 px-8 rounded-xl transition-all self-start cursor-pointer shadow-lg shadow-accent-orange/20 mt-2'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact

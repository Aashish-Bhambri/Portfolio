import { Briefcase, Folder, House, SquarePen, Wrench } from 'lucide-react'
import React from 'react'
const Navbar = () => {
    return (
        <div className='text-white   '>
            <div className=' flex items-center p-3.5 px-8 gap-8  justify-center rounded-[16px] bg-surface '>
                <House size={20}/>
                <Folder size={20}/>
                <Briefcase size={20}/>
                <Wrench size={20}/>
                <SquarePen size={20}/>
            </div>
        </div>
    )
}

export default Navbar
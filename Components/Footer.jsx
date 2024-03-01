import { ArrowDown, ArrowDownCircle } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#212731] py-8 text-white flex flex-row justify-around items-start h-[300px] flex-wrap '>
            <div className='flex flex-col gap-2'>
                <p className='no-underline text-xl '>Categories</p>
                <div className='underline font-light text-sm'>
                    <p>Web Builder</p>
                    <p>Hosting</p>
                    <p>Data Center</p>
                    <p>Robotic-Automation</p>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-xl'>Contact</p>
                <div className='underline font-light text-sm'>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>Terms Of Service</p>
                    <p>About</p>
                </div>
            </div>

            <div className='flex flex-row gap-3'>United States <ArrowDownCircle /></div>
        </div>
    )
}

import React from 'react'

export default function ResumeCard() {
    return (
        <div className='gradbg w-96'>
            <div className='flex flex-col bg-stone-900 p-2 rounded text-xl h-full justify-evenly'>
                <p className='px-4'>
                    <a href='static\Resume.pdf' target="_blank" rel="noopener noreferrer" className='underline'>Click here</a> to download my Resumé
                </p>
            </div>
        </div>
    )
}

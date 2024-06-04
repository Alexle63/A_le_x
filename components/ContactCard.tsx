import Link from 'next/link'
import React from 'react'

export default function ContactCard() {
    return (
        <div className='gradbg w-96'>
            <div className='flex flex-col bg-stone-900 p-2 rounded text-xl h-full justify-evenly'>
                <div className='flex p-2 px-8'>

                    <div className='font-bold pr-4 text-right space-y-2'>
                        <p>Email: </p>
                        <p>Linkedin: </p>
                        <p>Github: </p>
                        <p>Discord: </p>
                        <p>Insta: </p>
                    </div>
                    <div className='space-y-2'>
                        <p><Link href="mailto:alex.tle63@gmail.com" className='underline'>alex.tle63@gmail.com</Link></p>
                        <p><Link href="https://linkedin.com/in/alexle63/" target="_blank" rel="noopener noreferrer" className='underline'>alexle63</Link></p>
                        <p><Link href="https://github.com/Alexle63/" target="_blank" rel="noopener noreferrer" className='underline'>Alexle63</Link></p>
                        <p>pvt_arfs</p>
                        <p><Link href="https://www.instagram.com/alexdehpear/" target="_blank" rel="noopener noreferrer" className='underline'>@alexdehpear</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <div className='flex bg-stone-900 p-4 px-8 rounded-lg text-xl'>
            <div className='font-bold pr-4 text-right space-y-2'>
                <p>Email: </p>
                <p>Phone: </p>
                <p>Discord: </p>
                <p>Github: </p>
                <p>Insta: </p>
            </div>
            <div className='space-y-2'>
                <p><Link href="mailto:alex.tle63@gmail.com" className='underline'>alex.tle63@gmail.com</Link></p>
                <p>+1 (669) 263-7784</p>
                <p>pvt_arfs</p>
                <p><Link href="https://github.com/Alexle63/" target="_blank" rel="noopener noreferrer" className='underline'>Alexle63</Link></p>
                <p><Link href="https://www.instagram.com/alexdehpear/" target="_blank" rel="noopener noreferrer" className='underline'>@alexdehpear</Link></p>
            </div>
        </div>
    )
}

import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='text-lg flex flex-col justify-center items-center h-full'>
      <p> <b>Email: </b><Link href="mailto:alex.tle63@gmail.com">alex.tle63@gmail.com</Link></p>
      <p> <b>Phone: </b>+1 (669) 263-7784</p>
      <p> <b>Discord: </b>pvt_arfs</p>
      <p> <b>Instagram: </b><Link href="https://www.instagram.com/alexdehpear/">@alexdehpear</Link></p>
    </div>
  )
}

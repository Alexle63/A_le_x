import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Le',
  description: 'Powered by Next.JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <nav>
                <Link className='p-4' href="/">Go back home</Link>
                <Link className='p-4' href="/about">About</Link>
                <Link className='p-4' href="/projects">Projects</Link>
                <Link className='p-4' href="/hobbies">Hobbies</Link>
                <Link className='p-4' href="/contact">Contact</Link>
            </nav>
            {children}
            
        </body>
    </html>
  )
}

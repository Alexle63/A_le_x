import NavLink from '@/components/NavLink'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const rw = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'a.Le.x',
    description: 'Powered by Next.JS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {



    return (
        <html lang="en" className='overflow-y-hidden overflow-x-hidden'>
            <body className={rw.className + ' bg-orange-50 flex flex-col h-screen'} >

                <NavBar />

                <div className='grow p-8'>
                    {children}
                </div>

                <div className='bottom-4 z-0'>
                    <Footer />
                </div>

            </body>

        </html>
    )
}

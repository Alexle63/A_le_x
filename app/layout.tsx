import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import MainMenu from '@/components/MainMenu'

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
        <html>
            <body className='text-slate-700 p-8 relative h-screen overflow-clip bg-stone-900'>

                <div className='flex flex-col rounded-md h-full'>
                    <div className='flex grow'>
                        <MainMenu />

                        <div className='bg-stone-800 text-orange-500 w-full rounded-r-md flex justify-center items-center h-full'>
                            {children}
                        </div>
                    </div>
                </div>
                    <Footer />
            </body>
        </html>
    )
}

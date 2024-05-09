import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'


export const metadata: Metadata = {
    title: 'Alex Le - Portfolio',
    description: 'Neither an engineer nor artist; something more.',
}

const rw = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={rw.className + ' text-slate-700 p-8 relative h-screen overflow-clip bg-stone-900'}>

                <div className='flex flex-col rounded-md h-full bg-gradient-to-br from-orange-900 to-amber-300'>
                    <div className='flex h-full overflow-y-clip'>

                        <div className="text-orange-300 h-auto w-56 rounded-md m-1 mr-0">
                            <SideBar />
                        </div>

                        <div className='text-orange-300 bg-gradient-to-br from-stone-800 to-stone-950 m-1 p-4 rounded w-full justify-center overflow-y-auto is-transitioned'>
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

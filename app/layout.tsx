import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/components/Footer'
import MainMenu from '@/components/SideBar'
import SideBar from '@/components/SideBar'


export const metadata: Metadata = {
    title: 'a.Le.x',
    description: 'Powered by Next.JS',
}

const rw = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={rw.className + ' text-slate-700 p-8 relative h-screen overflow-clip bg-stone-900'}>

                <div className='flex flex-col rounded-md h-full bg-gradient-to-br from-orange-900 to-amber-300'>
                    <div className='flex grow'>

                        <div className="text-orange-300 h-auto w-56 rounded-md m-1 mr-0">
                            <SideBar />
                        </div>

                        <div className='text-orange-300 bg-neutral-800 h-auto m-1 rounded w-full flex justify-center items-center'>
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

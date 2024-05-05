import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Link from 'next/link'

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
        <html lang="en">
            <body className={rw.className}>

                <div className='relative w-screen h-screen'>

                    <nav className='absolute inset-1/4 p-8 flex gap-16 text-xl border border-black font-medium h-min'>

                        <Link className='text-3xl font-bold' href="/">a.Le.x</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/Resumes">Resumes</Link>
                        <Link href="/bio">Bio</Link>
                        <Link href="/contact">Contact</Link>

                    </nav>

                    {/* {children} */}

                </div>

            </body>

        </html>
    )
}

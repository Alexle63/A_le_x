'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import React from "react";

export default function SideBar() {

    const pages = [
        { title: 'Software', link: 'software' },
        { title: 'Textiles', link: 'textiles' },
        { title: 'Woodwork', link: 'woodwork' },
        { title: 'Skill Wall', link: 'skillwall' },
        { title: 'Biography', link: 'biography' },
    ]

    return <div className="flex flex-col justify-between h-full">

        <div>

            <div className="text-3xl p-4 flex flex-col font-black items-center bg-stone-900 rounded">
                <img src="static/Pyrogram.jpg" alt="Pyrogram.jpg" width={128} height={128} className="rounded-full" />
                <Link href="/" className="p-4 pb-0 bg-gradient-to-br from-orange-900 to-amber-400 to-75% inline-block text-transparent bg-clip-text">a_Le_x</Link>
            </div>

            <div>
                {(pages.map(page => <NavLink page={page} key={page.link} />))}
            </div>

        </div>

        <div className="text-sm font-light text-center p-1 px-2 bg-stone-900 rounded">
            I like cashews :3
        </div>

    </div>
}
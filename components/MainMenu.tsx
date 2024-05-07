'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import React from "react";

export default function MainMenu() {

    const pages = [
        { title: 'Software', link: 'software' },
        { title: 'Textiles', link: 'textiles' },
        { title: 'Woodwork', link: 'woodwork' },
        { title: 'Skill Wall', link: 'skillwall' },
        { title: 'Biography', link: 'biography' },
        { title: 'Contact', link: 'contact' }]

    return <div className="text-center p-4 rounded-md bg-gradient-to-b from-amber-100 via-stone-200 to-stone-0">
        <div className="text-3xl pb-4 px-4 flex font-bold justify-center items-center">
            {/* <img src="static/Pyrogram.jpg" alt="Pyrogram.jpg" width={64} height={64} className="rounded-full" /> */}
            <Link href="/" className="px-3">a_Le_x</Link>
        </div>
        <hr className="border-solid border-1 border-slate-700" />
        <div>
            {(pages.map(page => <NavLink page={page} key={page.link} handleClick={() => { }} />))}
        </div>
    </div>
}
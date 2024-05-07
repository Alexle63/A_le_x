"use client"

import Link from "next/link"
import NavLink from "./NavLink"
import React, { useState } from "react"
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";

const pages = [
    { title: 'Projects', link: 'projects' },
    { title: 'Bio', link: 'bio' },
    { title: 'Contact', link: 'contact' }]


export default function Nav({ handleClick }: any) {

    const [isOpen, setIsOpen] = useState(false)

    handleClick = () => {
        setIsOpen(!isOpen)
    }

    const ref = React.useRef(null);
    useClickAway(ref, () => setIsOpen(false));

    function Hamburglar(isOpen: boolean) {
        return isOpen ? <div className="absolute p-10 text-2xl h-screen w-screen p-auto bg-orange-200 md:hidden">
            {(pages.map(page => <NavLink page={page} key={page.link} handleClick={handleClick} />))}
        </div>
            : null
    }

    return (
        <div className="overflow-y-clip">
            <div className="sticky top-0 p-8 flex text-xl justify-between bg-orange-400">

                <div className="flex gap-16">
                    <Link href="/" className="font-extrabold text-3xl no-underline">a_Le_x</Link>

                    <div className="hidden md:flex gap-16"> {pages.map(page => <NavLink page={page} key={page.link} handleClick={() => { }} />)} </div>
                </div>


                <div className="md:hidden w-8 h-8 -m-2 mr-2"> <Hamburger onToggle={handleClick} toggled={isOpen} size={32} /> </div>
            </div>

            {Hamburglar(isOpen)}
        </div>
    )
}
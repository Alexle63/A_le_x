import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ page, handleClick }: { page: { title: string, link: string }, handleClick: () => void }) {
    const pathName = usePathname()
    let classes = pathName.includes(page.link) ? "bg-stone-600 text-orange-50" : ""

    const titleClass = " font-bold text-2xl no-underline bg-stone-800 "

    return (
        <Link onClick={handleClick} className={"block font-medium rounded p-1 px-4 transition hover:text-stone-800 hover:bg-slate-50 ease-in-out duration-500 " + (page.link == "/" ? titleClass : classes)} href={page.link}>{page.title}</Link>
    )
}
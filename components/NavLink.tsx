import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ page, handleClick }: { page: { title: string, link: string }, handleClick: () => void }) {
    const pathName = usePathname()
    let classes = pathName.includes(page.link) ? "bg-orange-500 text-stone-800 " : ""

    return (
        <Link onClick={handleClick} className={" font-light text-xl px-3 m-1 block text-right rounded transition hover:bg-orange-200 ease-out duration-500 " + classes} href={page.link}>{page.title}</Link>
    )
}
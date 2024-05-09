import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ page }: { page: { title: string, link: string } }) {
    const pathName = usePathname()
    let classes = pathName.includes(page.link) ? "bg-orange-400 text-stone-800 " : "bg-stone-900"

    return (
        <Link className={"font-normal text-xl px-4 p-1 my-1 block text-right rounded transition hover:bg-orange-200 hover:text-stone-800 ease-out duration-500 " + classes} href={page.link}>{page.title}</Link>
    )
}
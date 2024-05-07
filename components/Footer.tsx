export default function Footer() {

    return <div className='text-xs font-light p-2 rounded-b bg-gradient-to-l from-amber-100 via-slate-200 to-stone-0'>
        <p> &copy; {new Date().getFullYear()} Alex Le. &emsp; Built with <a href="https://nextjs.org/" className='underline'>Next.js</a>, Typescript, & <a href='https://tailwindcss.com/' className='underline'>Tailwind CSS</a> and is <a href='https://github.com/Alexle63/A.le.x' className='underline'>open source</a>.
        </p>
    </div>
}
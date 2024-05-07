export default function Footer() {

    return <div className='text-xs px-10 py-4 bg-orange-300'>
        <p> &copy; {new Date().getFullYear()} Alex Le.</p>
        <p><a href="https://nextjs.org/" className='underline'>Next.js</a>, Typescript, & <a href='https://tailwindcss.com/' className='underline'>Tailwind CSS</a> and is <a href='https://github.com/Alexle63/A.le.x' className='underline'>open source</a>.
        </p>
    </div>
}
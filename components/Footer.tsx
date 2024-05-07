export default function Footer() {

    return <div className='text-xs text-neutral-400 font-light p-2 rounded-b'>
        <p> &copy; {new Date().getFullYear()} <a href='https://github.com/Alexle63' className="underline">Alex Le</a>. &emsp; Built with <a href="https://nextjs.org/" className='underline'>Next.js</a>, <a href="https://www.typescriptlang.org/" className="underline">Typescript</a>, & <a href='https://tailwindcss.com/' className='underline'>Tailwind CSS</a> and is <a href='https://github.com/Alexle63/A.le.x' className='underline'>open source</a>.
        </p>
    </div>
}
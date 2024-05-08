export default function Footer() {

    return <div className='text-sm font-medium bg-gradient-to-r from-orange-400 to-amber-100 to-75% text-transparent bg-clip-text p-1.5'>
        <p> &copy; {new Date().getFullYear()} <a href='https://github.com/Alexle63' className='underline' target="_blank" rel="noopener noreferrer" >Alex Le</a>. &emsp; Built with <a href="https://nextjs.org/" className='underline' target="_blank" rel="noopener noreferrer" >Next.js</a>, <a href="https://www.typescriptlang.org/" className='underline' target="_blank" rel="noopener noreferrer" >Typescript</a>, <a href="https://www.mui.com/" className='underline' target="_blank" rel="noopener noreferrer" >MUI</a>, & <a href='https://tailwindcss.com/' className='underline' target="_blank" rel="noopener noreferrer" >Tailwind CSS</a> and is <a href='https://github.com/Alexle63/A.le.x' className='underline' target="_blank" rel="noopener noreferrer" >open source</a>.
        </p>
    </div>
}
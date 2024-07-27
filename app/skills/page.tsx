import SkillCard from '@/components/SkillCard'
import React from 'react'

export default function skillwall() {
    return (
        <div className='space-y-24 p-4'>

            {/* Frontend */}
            <div className='flex'>
                <h1 className='w-64'>Frontend</h1>
                <div className='grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
                    <SkillCard title="ReactJS" img="static\skills\react.png"></SkillCard>
                    <SkillCard title="NextJS" img="static\skills\nextjs.png"></SkillCard>
                    <SkillCard title="Tailwind" img="static\skills\tailwind.png"></SkillCard>
                    <SkillCard title="HTML5" img="static\skills\html.png"></SkillCard>
                    <SkillCard title="CSS3" img="static\skills\css.png"></SkillCard>
                    <SkillCard title="SASS" img="static\skills\sass.png"></SkillCard>
                    <SkillCard title="Materials UI" img="static\skills\mui.png"></SkillCard>
                </div>
            </div>

            {/* Backend */}
            <div className='flex'>
                <h1 className='w-64'>Backend</h1>
                <div className='grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
                    <SkillCard title="Python3" img="static\skills\python.png"></SkillCard>
                    <SkillCard title="NodeJS" img="static\skills\nodejs.png"></SkillCard>
                    <SkillCard title="ExpressJS" img="static\skills\expressjs.png"></SkillCard>
                    <SkillCard title="JavaScript" img="static\skills\js.png"></SkillCard>
                    <SkillCard title="TypeScript" img="static\skills\ts.png"></SkillCard>
                    <SkillCard title="JQuery" img="static\skills\jquery.png"></SkillCard>
                    <SkillCard title="Java" img="static\skills\java.png"></SkillCard>
                    <SkillCard title="C/C++" img="static\skills\c++.png"></SkillCard>
                    <SkillCard title="Prisma ORM" img="static\skills\prisma.png"></SkillCard>
                    <SkillCard title="mySQL" img="static\skills\mysql.png"></SkillCard>
                    <SkillCard title="postgreSQL" img="static\skills\postgresql.png"></SkillCard>
                    <SkillCard title="mongoDB" img="static\skills\mongodb.png"></SkillCard>
                </div>
            </div>

            {/* <h2>Soft Skills</h2>
            <p>Software Development Management</p>
            <p>Full Stack Development</p>
            <p>Agile Methodologies</p>
            <p>Unit Testing</p>
            <p>DevOps</p>
            <p>Scripting</p>
            <p>Documentation</p>
            <p>Accessibility</p>
            <p>Leadership</p>
            <p>Mentorship</p>
            <p>Quick Learner</p>
            <p>Motivated</p> */}

            {/* <h2>Technologies</h2>
            <p>Windows</p>
            <p>Linux/Unix</p>
            <p>Docker</p>
            <p>Git</p>
            <p>BASH</p>
            <p>VScode</p>
            <p>Atom</p>
            <p>EMACS</p>
            <p>SSH</p>
            <p>Microsoft Suite</p>
            <p>Adobe Suite</p>
            <p>Google Suite</p> 
            <p>Private Cloud Solutions</p> 
            */}

            {/* <h2>Programming Languages and Frameworks</h2>
            <div className='gradbg grid grid-cols-3 min-w-max w-'>

                <div className='bg-stone-900 rounded p-4 grid-col-1'>


                    <p>REST APIs</p>
                    <p>JSON</p>
                </div>
            </div>



            <h3>Game Design</h3>
            <p>Twinery</p>
            <p>Construct</p>
            <p>Bitsy</p>
            <p>TIC80</p>


            <p>IT Support</p>
            <p>Hardware Diagnostics</p>
            <p>Computer Building</p>

            <h3>Trades</h3>
            <p>Cross-stitching</p>
            <p>Sewing/Hand-sewing</p>
            <p>Woodworking</p>
            <p>Crocheting</p>
            <p>Embroidery</p>
            <p>Tailoring</p>

            <h3>3D CAD</h3>
            <p>Autodesk Inventor</p>
            <p>Autodesk Fusion</p>
            <p>3D Printing</p>
            <p>Prusa</p>
            <p>Dremel</p>
            <p>Ultimaker</p>

            <h3>Hobbies</h3>
            <p>Mechanical Keyboards</p>
            <p>Gardening</p>
            <p>Cooking</p> */}
        </div>
    )
}

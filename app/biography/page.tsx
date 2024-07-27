import ContactCard from '@/components/ContactCard'
import ResumeCard from '@/components/ResumeCard'
import React from 'react'

export default function Biography() {
    return (
        <div className='flex flex-col h-full w-full p-4 md:p-20 space-y-4 xl:space-y-0 xl:flex-row h-full'>

            <div className='flex flex-col m-auto justify-center h-full xl:mr-16'>
                <img src="static\Headshot.JPG" className='xl:hidden w-96 gradbg' />
                <div className='hidden xl:block xl:space-y-4'>
                    <img src="static\Headshot.JPG" className='w-96 gradbg' />
                    <ContactCard />
                    <ResumeCard />
                </div>
            </div>

            <div className='flex flex-col w-full justify-evenly h-full xl:overflow-y-auto space-y-4'>
                <div>
                    <h1>About the Developer</h1>
                    <p>
                        Hi! I'm Alex Le from San Jose, California. I achieved my Bachelor's degree in Computer Science with a minor in Mathematics at Swarthmore College (Swarthmore, PA) in 2024 and plan to attend graduate school for my Master's in Software Engineering.
                        <br /><br />
                        I'm a software developer and tradesman who believes that graduation is never the end to one's journey through education. I love self improvement, striving for the best, and giving back to the community. My involvement with the <a target="_blank" rel="noopener noreferrer" className='underline' href="https://sccs.swarthmore.edu/">Swarthmore College Computer Society (SCCS)</a> enabled me to learn new technologies, pushed me out of my comfort zone, and allowed me to contribute various software projects. My passion for the education of youth is demonstrated in my ongoing 8+ years of leadership with the <a target="_blank" rel="noopener noreferrer" className='underline' href="https://veym.net/">Vietnamese Eucharistic Youth Movement</a>, with the mission of spreading the Catholic faith.
                        <br /><br />
                        I love picking up odd hobbies outside of my time developing software and have tried sewing, gardening, cooking, crocheting, cross-stitching—anything that I can work with my hands! If you have any ideas on new hobbies for me to pick up, want to talk about crafts, or are interested in my works, please don't hesistate to contact me!
                    </p>
                </div>
                <div className='flex flex-col text-nowrap'>
                    <h1>CV</h1>
                    <div className='grid grid-cols-3 gap-x-8'>
                        <h3 className='col-span-3'>Education</h3>
                        <p>2020 - 2024 </p>
                        <p className='col-span-2'><b>B.A. Computer Science</b> | <i>Swarthmore College</i></p>
                        <h3 className='col-span-3'>Software</h3>
                        <p>2024 - Present </p>
                        <p className='col-span-2'><b>Code v Code</b> | Machine Learning Trainer, <i>Outlier.ai</i></p>
                        <p>2024 - Present </p>
                        <p className='col-span-2'><b>ReUnix</b> | Game Design, <i>Swarthmore College</i></p>
                        <p>2024 - Present </p>
                        <p className='col-span-2'><b>Swat Swap</b> | SCCS, <i>Swarthmore College</i></p>
                        <p>2024 </p>
                        <p className='col-span-2'><b>What Goes into a Bowl of Rice</b> | Game Design, <i>Swarthmore College</i></p>
                        <p>2024 </p>
                        <p className='col-span-2'><b>A Bit of Adventure</b> | Game Design, <i>Swarthmore College</i></p>
                        <p>2023 </p>
                        <p className='col-span-2'><b>Tickflow</b> | SCCS, <i>Swarthmore College</i></p>
                        <p>2021 - 2024 </p>
                        <p className='col-span-2'><b>Swat Dining Browser Extension</b> | SCCS, <i>Swarthmore College</i></p>
                    </div>

                </div>


                <div className='flex flex-col xl:hidden m-auto pb-8 md:pb-20 space-y-4'>
                    <ContactCard />
                    <ResumeCard />
                </div>
            </div>
        </div >
    )
}

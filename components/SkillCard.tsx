import React from 'react'

export default function SkillCard(props: { title: string, img: string }) {
    return (
        <div className='text-left w-44'>
            <div className='bg-zinc-800 rounded-xl h-44 flex items-center'><img src={props.img} alt={props.title} /></div>
            <h2 className='py-2 px-4 font-normal'>{props.title}</h2>
        </div>
    )
}

import ContactCard from '@/components/ContactCard'
import React from 'react'

export default function Biography() {
    return (
        <div className='flex flex-col justify-center h-full items-center'>
            <div className='rounded-md p-0.5 bg-gradient-to-br from-orange-900 to-amber-300 max-w-min'>
                <ContactCard />
            </div>
        </div>
    )
}

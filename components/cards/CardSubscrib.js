import Image from 'next/image'
import React from 'react'

export default function CardSubscrib() {
    return (
        <div className='flex bg-white/80 px-5 py-2'>
            <div>
                <Image src="/images/samansayyar.jpeg" width={'70'} height={'70'} className='w-full h-full object-cover rounded-full' />
            </div>
            <div className="flex flex-col ml-4 justify-center">
                <p className='lg:text-xl text-md font-light'>saman sayyar</p>
                <p className='lg:text-sm font-normal text-gray-500'>9.13k Subscribers</p>
            </div>
        </div>
    )
}

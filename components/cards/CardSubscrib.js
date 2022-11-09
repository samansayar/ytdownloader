import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardSubscrib() {
    return (
        <div className='w-full'>
            <Link href={`profile/samansayyar`}>
                <div className='flex dark:bg-slate-700 bg-white/80 cursor-pointer px-5 py-2'>
                    <div>
                        <Image alt="image placeholder" src="/images/samansayyar.jpeg" width={'60'} height={'60'} className='w-full h-full object-cover rounded-full' />
                    </div>
                    <div className="flex flex-col mx-4 justify-center">
                        <p className='lg:text-md text-md font-light'>saman sayyar</p>
                        <p className='lg:text-xs text-[11px] font-normal text-gray-500 dark:text-gray-400'>9.13k Subscribers</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

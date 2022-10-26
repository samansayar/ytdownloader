import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardVideo({ tumbnail = '/images/tumbnail.jpg' }) {
    const parameter = 'Learn-CSS-Box-Model-in-8-Minutes';
    return (
        <Link href={'video/' + parameter.toLocaleLowerCase()}>
            <div className="col-span-12 sm:col-span-6 hover:bg-gray-50 transition duration-200 pb-2 md:col-span-3">
                <card className="w-full flex flex-col">
                    <div className="relative">
                        {/* <!-- Image Video --> */}
                        <a href="#">
                            <img src={tumbnail} className="w-96 object-cover h-48" />
                        </a>

                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-2 rounded-md py-1">1:15</p>
                    </div>

                    <div className="flex flex-row mt-2 gap-2">

                        {/* <!-- Profile Picture --> */}
                        <Link href="/profile/samansayyar">
                            <div className="relative">
                                <Image src="/images/samansayyar.jpeg" width={'40'} className="rounded-full max-h-10 object-cover max-w-10" height={'40'} />
                            </div>
                        </Link>

                        {/* <!-- Description --> */}
                        <div clas="flex flex-col">
                            <a href="#">
                                <p className="text-gray-800 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                            </a>
                            <Link href="/profile/samansayyar">
                                <a className="text-gray-500 text-xs mt-2 hover:text-gray-900 capitalize" href="#"> samansayyar dev </a>
                            </Link>
                            <p className="text-gray-500 text-xs mt-1">241K views . 2 years ago</p>
                        </div>

                    </div>
                </card>
            </div>
        </Link>
    )
}

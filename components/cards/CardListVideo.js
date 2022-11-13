import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardListVideo({ data, key }) {
  console.log('data',data)
  return (
    <Link href="#" key={key}>
      <div className="flex transition duration-150 cursor-pointer hover:bg-white dark:hover:bg-slate-900 py-1 justify-start items-center space-y-2">
        <div className='w-[90%] h-full flex justify-start'>

          <div className="relative">
            {/* <!-- Image Video --> */}
            <a href="#">
              <Image src={data?.playlist_metadata.snippet.thumbnails.medium.url} width={data?.playlist_metadata.snippet.thumbnails.default.width} height={'70px'}
                className="w-24 object-cover h-24" alt="image profile" />
            </a>

            <p className="absolute right-1 bottom-4 dark:text-slate-300 bg-gray-900 text-gray-100 text-[11px] px-2 rounded-sm py-0.5">1:15</p>
          </div>

          <div className='flex text-xs mt-2 mx-3 dark:text-slate-100 text-gray-900 flex-col justify-start'>
            <p>{data?.playlist_title}</p>
            <p className='capitalize mt-1 text-[10px] text-gray-600 dark:text-slate-300'>{data?.playlist_metadata.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

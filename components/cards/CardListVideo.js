import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardListVideo({ data, key }) {
  // console.log(data)
  return (
    <Link href={'video/' + data.channel_id}>

      <div key={key} className="flex transition duration-150 cursor-pointer hover:bg-white dark:hover:bg-slate-900 py-1 justify-start items-center space-y-2">
        <div className='w-[10%] h-full flex justify-center items-center px-1.5'>
          <svg className="w-6 h-6 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div className='w-[90%] h-full flex justify-start'>

          <div className="relative">
            {/* <!-- Image Video --> */}
            <a href="#">
              <Image src={data?.playlist_metadata.snippet.thumbnails.default.url} width={data?.playlist_metadata.snippet.thumbnails.default.width} height={data?.playlist_metadata.snippet.thumbnails.default.height}
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

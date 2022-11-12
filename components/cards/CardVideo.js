import moment from 'moment';
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'path';
import React from 'react'

export default function CardVideo({ data, index }) {
  return (
      <Link href={'/video/' + data?.video_id} key={index}>
        <div className="col-span-12 cursor-pointer sm:col-span-6 dark:hover:bg-slate-900 hover:bg-gray-50 transition duration-200 pb-2 md:col-span-3 dark:border-b dark:border-l border-slate-700 px-2">
          <div className="w-full flex flex-col">
            <div className="relative">
              {/* <!-- Image Video --> */}
              <Link href={'/video/' + data?.video_id}>
                <div>
                {/* this[0].video_metadata.items[0].snippet.thumbnails.maxres.url */}
                  <Image src={data?.video_metadata.items[0].snippet.thumbnails.high.url} className="w-96 object-cover h-48" alt="image profile" width="370px" height={'220px'} />
                </div>
              </Link>

              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-2 rounded-md py-1">1:15</p>
            </div>

            <div className="flex flex-row mt-2 gap-2">

              {/* <!-- Profile Picture --> */}
              <Link href="/profile/samansayyar">
                <div className="relative">
                  <Image alt="image placeholder" src="/images/samansayyar.jpeg" width={'40'} className="rounded-full max-h-10 object-cover max-w-10" height={'40'} />
                </div>
              </Link>

              {/* <!-- Description --> */}
              <div clas="flex flex-col">
                <Link href={'/video/' + data?.video_id}>
                  <p className="dark:text-slate-100 text-gray-800 text-sm font-medium">
                  {data?.video_title.substring(0, 25)}  ...
                  </p>
                </Link>
                <Link href="/profile/samansayyar">
                  <a className="dark:text-slate-300 text-gray-500 text-xs mt-2 hover:text-gray-900 capitalize" href="#">
                    {data?.video_metadata.items[0].snippet.channelTitle} </a>
                </Link>
                <div className='flex items-center'>
                  <div className="text-gray-500 dark:text-slate-400 text-xs mt-1"> {data?.video_metadata.items[0].snippet.publishedAt}</div>
                  <span className='px-1 font-light text-gray-500'>~</span>
                  <p className="text-gray-500 dark:text-slate-400 text-xs mt-1">views {data?.view_count}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Link>
  )
}

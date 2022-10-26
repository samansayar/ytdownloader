import Image from 'next/image'
import React from 'react'

export default function CardListVideo({ res, index }) {
  return (
    <div key={index} className="flex transition duration-150 cursor-pointer hover:bg-white py-1 justify-start items-center space-y-2">
      <div className='w-[10%] h-full flex justify-center items-center px-1.5'>
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <div className='w-[90%] h-full flex justify-start'>

        <div className="relative">
          {/* <!-- Image Video --> */}
          <a href="#">
            <Image src="/images/tumbnail.jpg" className="w-24 object-cover h-16" alt="image profile" />
          </a>

          <p className="absolute right-1 bottom-2 bg-gray-900 text-gray-100 text-[11px] px-2 rounded-sm py-0.5">1:15</p>
        </div>

        <div className='flex text-xs mt-2 mx-3 text-gray-900 flex-col justify-start'>
          <p>ویدیو راه - قسمت یک</p>
          <p className='capitalize mt-1 text-[10px] text-gray-600'>saman sayyar</p>
        </div>
      </div>
    </div>
  )
}

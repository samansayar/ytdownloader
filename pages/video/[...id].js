import Main from '@/components/layouts/Main';
import CardListVideo from '@/components/cards/CardListVideo';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'
import Image from 'next/image';

export default function SingleVideo() {
  const router = useRouter();
  const { id } = router.query
  const player = useRef();

  useEffect(() => {
    const options = {};
    player.current = plyr.setup('#plyr-player', options);
    // player.current.on('timeupdate', () => timeUpdated()) // this throws an error
  });

  const pause = () => {
    // this doesn't work either
    console.log(player.current) // there is something in here
    player.current.pause() // but this throws an error
  }

  return (
    <div className='relative'>
      <Head>
        <title>watching video {id}  - Youtube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/youtube-svgrepo-com.svg" />
      </Head>

      <Main hiddenSidebar={true}>
        <div className='flex w-full lg:flex-row flex-col-reverse items-cenetr relative'>
          {/* List Video */}
          <div className='w-full lg:w-3/12 h-full relative lg:p-2'>
            <div className='w-full text-xs border border-gray-300'>
              <div className='w-full bg-white border-b border-gray-300 p-4'>
                <div className='flex items-center text-gray-600'>
                  <div className='lg:block hidden'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className='font-medium text-sm mx-4'>ویدیو راه</p>
                </div>
                <div className='mt-2 w-full flex justify-end items-center text-gray-600'>
                  <p className='text-gray-700 text-xs mx-4'>samansayyar 1/8</p>
                </div>
                <div className='mt-4 w-full flex justify-between items-center text-gray-600'>
                  <div>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                  </div>
                  <div className='flex items-center space-x-2'>
                    {/* <div> */}
                    <svg className="w-5 h-5 mx-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    {/* </div> */}
                    {/* <div> */}
                    <svg className="w-5 h-5 mx-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className='h-96 space-y-1 scrollbar-hide pb-4 pt-2 overflow-y-auto w-full flex flex-col'>
                <div className='rtl:block ltr:hidden'></div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((res, index) => (
                  <div key={index}>
                    <CardListVideo res={res} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Watch Video selected */}
          <div className='w-full lg:w-9/12 lg:p-2 h-full relative'>
            <div className="relative w-full lg:h-[630px]">
              <video id="plyr-player" ref={player} width={'500'} controls src="/videos/taekwondo.mp4" className="w-full h-full" />
            </div>
            {/* Details Video Description */}
            <div className="w-full mt-6" dir='ltr'>
              <div className="flex md:flex-row flex-col justify-between md:space-y-1 space-y-3 border-b border-gray-300 pb-2">
                <div className="flex flex-col pb-2 jsutify-between">
                  <div className="flex flex-col w-full">
                    <h3 className="md:text-md text-sm text-gray-900">ویدیو راه اول قسمت اول
                      (Coming Soon)</h3>
                  </div>
                  <div className="mt-3 text-gray-500 md:text-sm text-xs">
                    147,222 views &nbsp; Jul 6, 2021
                  </div>
                </div>

                <div className="flex flex-row space-x-2 items-center">


                  <div className="flex flex-row space-x-5 justify-center items-center pb-4 capitalize mr-5">
                    <div></div>
                    <button type="button" className="flex items-center text-sm text-gray-700 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="fill-current md:w-6 md:h-6 w-5 h-5"
                        viewBox="0 0 24 24">
                        <path
                          d="M20,8h-5.612l1.123-3.367c0.202-0.608,0.1-1.282-0.275-1.802S14.253,2,13.612,2H12c-0.297,0-0.578,0.132-0.769,0.36 L6.531,8H4c-1.103,0-2,0.897-2,2v9c0,1.103,0.897,2,2,2h3h10.307c0.829,0,1.581-0.521,1.873-1.298l2.757-7.351 C21.979,12.239,22,12.12,22,12v-2C22,8.897,21.103,8,20,8z M4,10h2v9H4V10z M20,11.819L17.307,19H8V9.362L12.468,4l1.146,0 l-1.562,4.683c-0.103,0.305-0.051,0.64,0.137,0.901C12.377,9.846,12.679,10,13,10h7V11.819z">
                        </path>
                      </svg>
                      <span className="ml-1">23k</span>
                    </button>

                    <button type="button" className="flex items-center text-sm text-gray-700 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="fill-current md:w-6 md:h-6 w-5 h-5"
                        viewBox="0 0 24 24">
                        <path
                          d="M20,3h-3H6.693C5.864,3,5.112,3.521,4.82,4.298l-2.757,7.351C2.021,11.761,2,11.88,2,12v2c0,1.103,0.897,2,2,2h5.612 L8.49,19.367c-0.203,0.608-0.101,1.282,0.274,1.802C9.14,21.689,9.746,22,10.388,22H12c0.297,0,0.578-0.132,0.769-0.36l4.7-5.64 H20c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M11.531,20h-1.145l1.562-4.684c0.103-0.305,0.051-0.64-0.137-0.901 C11.623,14.154,11.321,14,11,14H4v-1.819L6.693,5H16v9.638L11.531,20z M18,14V5h2l0.001,9H18z">
                        </path>
                      </svg>
                      <span className="ml-1">DISLIKE</span>
                    </button>
                  </div>

                  <div className="flex flex-row space-x-2 justify-center items-center pb-4 capitalize">
                    <button type="button" className="flex items-center text-sm text-gray-700 focus:outline-none">
                      <svg className="md:w-6 md:h-6 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                        </path>
                      </svg>
                      <span className="ml-1 capitalize">share</span>
                    </button>
                  </div>
                </div>
              </div>


              <div className="mt-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      <Image width={'40'} height={'40'} src="/images/samansayyar.jpeg" alt="picture user" className="shadow-md object-cover rounded-full w-full h-full" />
                    </div>
                    <div className="flex mx-3 flex-col justify-center items-start mb-1">
                      <p className="text-gray-800 capitalize w-40 md:text-md text-sm mb-1">saman sayyar</p>
                      <p className="text-gray-800 capitalize w-40 md:text-sm text-xs">281k follow</p>
                    </div>
                  </div>
                  <div className="relative mb-1">
                    <button className="capitalize bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-3 lg:py-2 py-3">
                      <span>on youtube</span>
                      <svg className="lg:w-6 lg:h-6 w-4 h-4 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </div>
                </div>

                <div className="m-3 mt-6">
                  <p className="flex w-full h-full relative text-gray-800 font-base md:text-md text-sm">
                    Description og this great Video 😍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>

    </div>
  )
}

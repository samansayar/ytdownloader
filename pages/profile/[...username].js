import Main from '@/components/layouts/Main';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Banner from '@/public/images/Sprinkle.svg';
import Avatar from '@/public/images/samansayyar.jpeg';
import Image from 'next/image';
import CardVideo from '@/components/cards/CardVideo';

const Tabs = [
    { 'title': 'Home' },
    { 'title': 'Videos' },
    { 'title': 'Playlists' },
    { 'title': 'About' }
]

export default function Username() {
    const route = useRouter();
    const { username } = route.query;
    return (
        <div className='relative'>
            <Head><title>profile {username} - Youtube</title></Head>
            <Main withoutPadding={true}>
                <div className='w-ful relative'>
                    <Image src={Banner} height={'230'} className='object-cover w-full h-full' />
                </div>
                <div dir='ltr' className='bg-white/80 lg:h-36 h-40 flex flex-col lg:pl-20 pt-4 pb-0'>
                    <div className='flex items-center w-full justify-between'>
                        <div className='flex items-center'>
                            <div className='relative'><Image height={'74'} width={'74'} src={Avatar}
                                className={'w-full h-full rounded-full object-cover'} /></div>

                            <div className='flex justify-center flex-col mx-5'>
                                <p className='text-xl text-gray-800 capitalize'>saman sayyar</p>
                                <p className='text-gray-500 text-[13px] mt-0.5'>3.19K subscribers</p>
                            </div>
                        </div>
                        <div className='lg:pr-10'>
                            {/* Button On youtube */}
                            <div className="relative">
                                <button className="capitalize bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-3 lg:py-2 py-3">
                                    <span>on youtube</span>
                                    <svg className="lg:w-6 lg:h-6 w-4 h-4 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Tab */}
                    <div className='mx-1 h-full flex items-end space-x-8'>
                        {Tabs.map((tab, index) => (
                            <p key={index} className={`uppercase cursor-pointer text-gray-600 pb-3 text-sm ${index === 0 && 'border-b-[2px]'} w-20 flex font-medium justify-center items-center border-gray-600`}>{tab.title}</p>
                        ))}
                    </div>
                </div>
                <div dir='ltr' className='mt-6 pl-20 pr-10 w-full pb-10 text-gray-600'>
                    <h2 className='capitalize flex font-medium items-cenetr'>
                        <span>Top Stories</span>
                        <span className='ml-4'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                    </h2>
                    {/* Videos */}
                    <div className='grid grid-cols-12 gap-2 gap-y-4 w-full mt-6'>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((res, index) => (
                            <CardVideo tumbnail='/images/cat-dock.jpeg' />
                        ))}
                    </div>
                </div>
            </Main>
        </div>
    )
}

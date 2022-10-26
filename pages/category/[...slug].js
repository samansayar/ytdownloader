import Main from '@/components/layouts/Main';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Banner from '@/public/images/Sprinkle.svg';
import Avatar from '@/public/images/samansayyar.jpeg';
import Image from 'next/image';
import CardVideo from '@/components/cards/CardVideo';

export default function Slug() {
    const route = useRouter();
    const { slug } = route.query;
    return (
        <div>
            <Head><title>Category {slug} - Yoututbe</title></Head>
            <Main withoutPadding={true}>
                <div className='w-ful relative'>
                    <Image alt="image placeholder" src={Banner} height={'230'} className='object-cover w-full h-full' />
                </div>
                <div dir='ltr' className='bg-white/80 h-36 flex flex-col lg:pl-20 pl-2 pt-4 pb-0'>
                    <div className='flex items-center'>
                        <div className='relative'><Image alt="image placeholder" height={'74'} width={'74'} src={Avatar}
                            className={'w-full h-full rounded-full object-cover'} /></div>

                        <div className='flex justify-center flex-col mx-5'>
                            <p className='text-xl text-gray-800 capitalize'>news</p>
                            <p className='text-gray-500 text-sm mt-0.5'>36.2M subscribers</p>
                        </div>
                    </div>
                    {/* Tab */}
                    <div className='mx-2 h-full flex items-end space-x-8'>
                        <p className='uppercase text-gray-600 pb-3 text-sm border-b-[2px] w-20 flex justify-center items-center border-gray-600'>Home</p>
                        <p className='uppercase text-gray-600 pb-3 text-sm w-20 flex justify-center items-center border-gray-600'>channels</p>
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
                        {[1,2,3,4,5,6,7,8].map((res, index) => (
                            <div key={index}>
                                <CardVideo />
                            </div>
                        ))}
                    </div>
                </div>
            </Main>
        </div>
    )
}

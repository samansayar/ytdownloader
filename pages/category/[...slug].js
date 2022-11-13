import Main from '@/components/layouts/Main';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Image from 'next/image';
import CardVideo from '@/components/cards/CardVideo';
import Banner from '@/components/Banner';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Slug({ AllProfile, subcat }) {
    const route = useRouter();
    const { slug } = route.query;
    // console.log('subcat',subcat);
    // useEffect(() => {
    //     const getSubCat = async () => {

    //         setSubcat(dataSubCat);
    //     }
    //     getSubCat();
    //     console.log(subcat);
    // }, [])

    // const { slug } = route.query;

    return (
        <div>
            <Head><title>دسته بندی های {slug[1]} - Yoututbe</title></Head>
            <Main withoutPadding={true}>

                <Banner />
                <div dir='ltr' className={`bg-white/80 ${subcat[0]?.main_category_info ? 'lg:h-40' : 'lg:h-28'} dark:bg-slate-900 flex flex-col lg:px-10  pt-4 pb-0`}>
                    <div className='flex items-center h-full w-full'>
                        <div className='relative rounded-full bg-red-100 p-1 flex justify-center h-20 w-20 items-center'>
                            <Image alt="image placeholder" src={'/youtube-svgrepo-com.svg'} width={'50px'} height={'50px'} className="w-full" />
                        </div>

                        <div className='flex justify-center flex-col mx-5'>
                            <p className='text-xl text-gray-800 font-medium dark:text-gray-100 capitalize'>{slug[1]}</p>
                            {/* <p className='text-gray-500 dark:text-slate-300 text-[12px] mt-0.5'>36.2M subscribers</p> */}
                        </div>
                    </div>
                    {/* Tab */}
                    {subcat && (
                        <div className='mx-1 h-full flex items-end space-x-8'>
                            {subcat?.map(res => (
                                    <p key={res?.id} className='uppercase text-gray-600 pb-3 text-sm border-b-[2px] w-20 flex justify-center items-center border-gray-600 dark:text-slate-400'>{res?.main_category_info?.category_title}</p>
                            ))}
                            {/* <p className='uppercase text-gray-600 pb-3 text-sm w-20 flex justify-center items-center border-gray-600 dark:border-gray-300'> </p> */}
                        </div>
                    )}
                </div>
                <div dir='ltr' className='mt-6 pl-20 pr-10 w-full pb-10 dark:text-slate-300 text-gray-600'>
                    {/* Videos */}
                    <div className='grid grid-cols-12 gap-2 gap-y-4 w-full mt-6'>
                        {AllProfile.length > 0 ? (
                            AllProfile.map((res, index) => (
                                <CardVideo data={res} key={index} />
                            ))
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </Main>
        </div>
    )
}

export async function getServerSideProps({ params }) {

    const { slug } = params;
    // Get All Profile Data
    const resProfile = await fetch(`https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${slug[0]}&is_special=false`, {
        headers: {
            "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
        }
    });
    const AllProfile = await resProfile.json();

    const ressubcat = await fetch(`https://rasmlink.ir/api-v1/video_categories?id=${slug[0]}`, {
        headers: {
            "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
        }
    });
    const subcat = await ressubcat.json();

    // Get All Profile Data
    // const ResVideoProfile = await fetch(`https://rasmlink.ir/api-v1/youtube_videos?video_channel_id=${slug[0]}&is_special=true`);
    // const AllVideo = await ResVideoProfile.json();

    if (!AllProfile && !subcat) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            AllProfile,
            subcat,
        }
    }
}

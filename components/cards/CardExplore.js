import Image from 'next/image'
import Link from 'next/link'

export default function CardExplore({ Items, index }) {

    return (
        <Link href={`category/${Items.title.trim()}`} key={index}>
            <div className='capitalize rounded-md text-sm dark:bg-slate-700 bg-gray-50 py-3 px-5 transition duration-150 hover:bg-gray-300 cursor-pointer flex justify-center items-start flex-col h-24'>
                <div>
                    <Image width={'30'} height={'30'} src={Items.icon} alt={Items.title} />
                </div>
                <p className='font-medium text-sm dark:text-slate-100 text-gray-700 mt-1'>{Items.title}</p>
            </div>
        </Link>
    )
}

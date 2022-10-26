import Image from 'next/image'
import Link from 'next/link'

export default function CardExplore({ Items }) {

    return (
        <Link href={`category/${Items.title.trim()}`}>
            <div className='capitalize rounded-md text-sm bg-gray-50 py-3 px-6 transition duration-150 hover:bg-gray-300 cursor-pointer flex justify-center items-start flex-col h-28'>
                <div>
                    <Image width={'34'} height={'34'} src={Items.icon} alt={Items.title} />
                </div>
                <p className='font-medium text-gray-700 mt-1'>{Items.title}</p>
            </div>
        </Link>
    )
}

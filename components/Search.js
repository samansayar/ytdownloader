
export default function Search() {
    return (
        <div className="text-sm relative" dir="ltr">
            <input type={'text'} placeholder={'Search'}
                className='py-2 h-11 rounded border text-left focus:outline-none  bg-gray-100 dark:bg-slate-800
                focus:border-gray-300 dark:focus:border-slate-700 transition text-lg placeholder:text-base w-[600px] duration-200 dark:border-slate-700 border-gray-300 pl-4 pr-10'
                autoComplete={'off'}
            />
            <button className="absolute w-14 flex justify-center items-center h-11 right-0
             top-0 bottom-0 dark:bg-slate-700 bg-gray-100 border-gray-300 dark:border-slate-700 border">
                <IconSearch />
            </button>
        </div>
    )
}


const IconSearch = () => {
    return (
        <div>
            <svg className="w-5 h-5 dark:text-slate-300" fill="none" stroke="currentColor" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
    )
}
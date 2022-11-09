import Sidebar from '@/components/layouts/Sidebar';
import NavBar from '@/components/NavBar';

export default function Main({ children, hiddenSidebar = false, withoutPadding = false }) {
  if (withoutPadding) {
    return (
      <div>
        <NavBar />
        <div className='flex w-full'>
          <Sidebar hidden={hiddenSidebar} />
          <div className={`${hiddenSidebar ? 'w-full lg:p-0 p-4' : `lg:w-10/12 w-full p-2`} flex-col dark:bg-slate-800  bg-gray-100 mx-auto flex pt-6`}>
            {children}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <NavBar />
        <div className='flex w-full'>
          <Sidebar hidden={hiddenSidebar} />
          <div className={`${hiddenSidebar ? 'w-full lg:px-20 p-4' : `p-4 lg:w-10/12 w-full lg:pl-20`} flex-col dark:bg-slate-800 bg-gray-100 mx-auto flex pt-6`}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

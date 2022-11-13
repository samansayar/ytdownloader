import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ItemMenu from "./ItemMenu";
import Search from "./Search";


const NavBar = () => {
  const { theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{ direction:'rtl' }} className="w-full py-2 shadow  h-[65px] flex justify-between items-center px-5">
      {/* Button Add video */}
      <div className="flex flex-row-reverse items-center space-x-8">
        <div></div>
        <Link  href="https://rasmlink.com/studio" target={'_blank'}>
          <a className="capitalize rounded-md bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-4 py-2">
            <span>add video</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </a>
        </Link>
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 cursor-pointer dark:bg-slate-800 bg-gray-200 rounded-full flex justify-center items-center">
          {/* 
            <svg className="w-6 text-yellow-300 h-6 fill-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : ( */}
          <svg className="w-6 text-slate-700 dark:text-slate-400 h-6 fill-slate-700 dark:fill-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          {/* )} */}
        </div>
      </div>
      {/* Search Feild */}
      <div className="lg:flex hidden">
        <Search />
      </div>
      {/* Icon BarMenu - logo  */}
      <div className="flex items-center flex-row-reverse justify-center">
        <div className="lg:block hidden">
          <Link href="/">
            <div className="mx-4 flex h-full items-center cursor-pointer">
              <p className="mx-1 font-bold dark:text-slate-100 text-gray-600">Rasmlink</p>
              <Image alt="image placeholder" src={'/youtube-svgrepo-com.svg'} width={'35'} height={'60px'} className="w-full" />
            </div>
          </Link>
        </div>
        <button onClick={() => setToggle(toggle => !toggle)}>
          <svg className="w-7 h-7 text-gray-800 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {toggle && (
        <div  className="fixed z-50 inset-y-0 right-0 h-screen w-full bg-gray-900/50 dark:bg-slate-900/60 backdrop-blur-[2px]">
          <div className="lg:w-1/6 w-[80%] bg-white dark:bg-slate-900 h-full">
            <div className="flex items-center justify-start px-4">
              <button onClick={() => setToggle(toggle => !toggle)}>
              <svg className="w-7 h-7 text-gray-800 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <Link href="/">
                <div className="mx-8 flex h-full items-center cursor-pointer">
                <p className="mx-1 font-bold dark:text-slate-100 text-gray-600">Rasmlink</p>
                  <Image alt="image placeholder" src={'/youtube-svgrepo-com.svg'} width={'35'} height={'60px'} className="w-full" />
                </div>
              </Link>
            </div>
            <ItemMenu />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

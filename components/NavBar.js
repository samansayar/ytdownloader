import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ItemMenu from "./ItemMenu";
import Search from "./Search";


const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="w-full py-2 shadow bg-white h-[65px] flex justify-between items-center px-5">
      {/* Button Add video */}
      <button className="capitalize bg-red-600 flex justify-around items-center text-white text-sm px-6 py-2">
        <span>add video</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      </button>
      {/* Search Feild */}
      <div className="lg:flex hidden">
        <Search />
      </div>
      {/* Icon BarMenu - logo  */}
      <Link href="/">
        <div className="flex items-center justify-center">
          <div className="mx-8 flex h-full items-center">
            <p className="mx-1 font-bold text-gray-600">Youtube</p>
            <Image src={'/youtube-svgrepo-com.svg'} width={'35'} height={'60px'} className="w-full" alt="logo" />
          </div>
          <button onClick={() => setToggle(toggle => !toggle)}>
            <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </Link>
      {toggle && (
        <div dir="ltr" className="fixed z-50 inset-0 h-screen w-full bg-gray-900/50 backdrop-blur-[2px]">
          <div className="lg:w-1/6 w-[60%] bg-white h-full">
            <div className="flex items-center justify-start px-4">
              <button onClick={() => setToggle(toggle => !toggle)}>
                <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <Link href="/">
                <div className="mx-8 flex h-full items-center">
                  <Image src={'/youtube-svgrepo-com.svg'} width={'35'} height={'60px'} className="w-full" alt="logo" />
                  <p className="mx-1 font-bold text-gray-600">Youtube</p>
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

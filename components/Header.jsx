import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Header() {
  const [isopen, setIsopen] = useState(false);
  const nav = [
    {
      name: "Interviews",
      link: "/",
    },
    {
      name: "Locations",
      link: "/",
    },
    {
      name: "Emerging Talent",
      link: "/",
    },
    {
      name: "Left at Square",
      link: "/",
    },
  ];
  return (
    <>
      <div className="w-full h-[78px] border-[1px] flex justify-center  ">
        <div className="w-[98%] flex items-center justify-between h-full">
          <div className="md:w-[20%] w-[40%] h-full  flex   justify-start items-center ">
            <div className="border-black flex border-r-[1px]">
              <Image
                src="/images/home.svg"
                alt="logo"
                width={21}
                height={21}
                className="mr-4 ml-3"
              />
            </div>
            <div className=" ml-4 text-[19px] font-semibold text-[#1A1A1A] flex items-end">
              Careers
            </div>
          </div>
          <div className="w-full h-full hidden  md:flex justify-center items-center ">
            {nav.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="px-[5px] text-base font-[400] mx-[5px] transition-all duration-200 ease-in-out hover:bg-slate-100 hover:py-4   hover:rounded"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="w-[15%] bg-white flex justify-end ">
            <button className="w-[108px] hidden md:block h-[48px] bg-blue-600 rounded text-white hover:bg-blue-700">
              <Link href="#">Search jobs</Link>
            </button>
            <div className="  text-black mr-4">
              <button
                onClick={() => {
                  setIsopen(!isopen);
                }}
                className=" transition-all ease-in duration-500"
              >
                {isopen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      { isopen && <div className="w-full h-screen fixed  top-[10%] z-50  bg-white">
                    <div className={`relative w-full h-full transition-transform duration-1000 ${isopen ? 'slide-in' : 'slide-out'} flex flex-col `}>
                    {
                        nav.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="py-6 px-6  text-base font-[400] border-t-[1px] border-gray-500  transition-all duration-200 ease-in-out hover:bg-slate-100 hover:py-4   hover:rounded"
                                    onClick={() => {setIsopen(!isopen);}}>
                                    {item.name}
                                </Link>
                            );})}
                            <Link href="#"
                                className="py-6 px-6  text-base font-[400] border-y-[1px] border-gray-500  ">
                               <button
                                onClick={() => {
                                    setIsopen(!isopen);
                                }}
                                className=" transition-all ease-in duration-500 bg-blue-600 text-white py-3 rounded-[5px] w-full"
                            >
                                Search Jobs
                                </button> 
                                </Link>
                    </div>
</div>}
    </>
  );
}

export default Header;

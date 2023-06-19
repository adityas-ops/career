import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const nav = [
        {
            name: 'Interviews',
            link: '/'
        },
        {
            name:'Locations',
            link: '/'
        },
        {
            name:'Emerging Talent',
            link: '/'
        },
        {
            name:'Left at Square',
            link: '/'
        }
    ]
  return (
    <div className='w-full h-[78px] border-[1px] flex justify-center '>
    <div className='w-[98%] flex items-center justify-between h-full'>
        <div className='w-[20%] h-full  flex   justify-start items-center '>
                <div className="border-black flex border-r-[1px]">
                <Image 
                src='/images/home.svg'
                alt='logo'
                width={21}
                height={21} 
                className="mr-4 ml-3"
                />
                </div>
                <div className=' ml-4 text-[19px] font-semibold text-[#1A1A1A] flex items-end'>
               Careers
                </div>
        </div>
        <div className='w-full h-full  flex justify-center items-center'>
            {
                nav.map((item,index)=>{
                    return(
                        <Link  key={index} href={item.link} className="px-[5px] text-base font-[400] mx-[5px] transition-all duration-200 ease-in-out hover:bg-slate-100 hover:py-4   hover:rounded">
                                {item.name}
                        </Link>
                    )
                })

            }
        </div>
        <div className='w-[15%] bg-white flex justify-end '>
            <button className='w-[108px] h-[48px] bg-blue-600 rounded text-white hover:bg-blue-700'>
                <Link href="#">
                    Search jobs
                </Link>

            </button>
        </div>
    </div>

    </div>
  )
}

export default Header
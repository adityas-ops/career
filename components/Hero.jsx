import Link from 'next/link';
import React from 'react'
import { useEffect, useRef } from 'react';
function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
    const handleWindowResize = () => {
      const isResponsiveModeActive = window.innerWidth < 768; // Adjust the breakpoint as needed

      if (!isResponsiveModeActive) {
        videoRef.current.play();
      }
    };

    const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const videoPosition = videoRef.current.getBoundingClientRect().top;

  if (
    videoPosition < windowHeight * 0.1 &&
    videoPosition > -windowHeight &&
    scrollPosition > 0
  ) {
    
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  }
};
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' max-w-[100%] h-full flex items-center justify-center'>
    <div className=' lg:w-[calc(1320px + 30vw)] relative  overflow-x-hidden w-[calc(1320px + 25vw)] flex items-center justify-center'>
<video src="/images/hero_nodollar.mp4"  className='md:w-[100%] h-[400px] w-screen object-fill    md:h-[465px] md:object-cover'  ref={videoRef} data-reset="true" autoPlay  muted playsInline></video>
    <div className="flex-col   flex items-center  font-semibold    absolute top-2 md:top-[10%] md:left-[40%]">
        <h6 className='uppercase tracking-[1px] mt-4 md:mt-14'>Work at Square</h6>
        <h2 className='md:text-[2.625rem] text-[1.5rem] text-center leading-[2rem] md:leading-[3.375rem] mt-5'>
        Invent today.<br/>
Shape tomorrow.
        </h2>
        <button className='w-[118px] mt-5 py-3 bg-blue-600 rounded text-white hover:bg-blue-700'>
                <Link href="#">
                    Search jobs
                </Link>

            </button>
    </div>
    </div>
    </div>

  )
}

export default Hero
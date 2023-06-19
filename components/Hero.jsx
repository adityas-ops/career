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
    <div className='relative max-w-[100%] h-full flex items-center justify-center'>
    <div className='w-[100%] h-full flex items-center justify-center'>
<video src="/images/hero_nodollar.mp4"  className=' object-fill '  ref={videoRef} data-reset="true" autoPlay  muted playsInline></video></div>
    <div className="w-[400px] h-[400px] flex-col  flex items-center  font-semibold    absolute top-0 left-[35%]">
        <h6 className='uppercase tracking-[1px] mt-14'>Work at Square</h6>
        <h2 className='text-[42px] text-center leading-[55px] mt-5'>
        Invent today.<br/>
Shape tomorrow.
        </h2>
        <button className='w-[118px] mt-5 h-[48px] bg-blue-600 rounded text-white hover:bg-blue-700'>
                <Link href="#">
                    Search jobs
                </Link>

            </button>
    </div>
    </div>

  )
}

export default Hero
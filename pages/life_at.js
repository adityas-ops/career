import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';


const images = [
    {
        src: "/images/corsoul/careers_home_carousel_03.png",
        alt: "image 1",
        title:"Our office events feature local Square sellers."
    },
    {
        src: "/images/corsoul/careers_home_carousel_04.png",
            alt:'image 2',
            title:"Our office events feature local Square sellers."
    },
    {
        src: "/images/corsoul/careers_home_carousel_05.png",
            alt:'image 3',
            title:"Our office events feature local Square sellers."
    },
    {
            src: "/images/corsoul/careers_home_carousel_AU.png",
            alt:"image 4",
            title:"Our office events feature local Square sellers."
    },
    {
        src: "/images/corsoul/careers_home_carousel_support.png",
        alt:"image 5",
        title:"Our office events feature local Square sellers."
    }
  ];

function Life_at() {
  const [padd,setPadd] = useState("1rem")
  
  useEffect(() => {
      const handleResize = () => {
        // Adjust perPage based on screen size
        if (window.innerWidth < 768) {
    
          setPadd('1rem')
        } else {
          setPadd('10rem')
        }
      };
    
      // Set initial perPage value
      handleResize();
    
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
    
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <>
         <div className="md:pt-[5.25rem] pt-[3.25rem]  flex justify-center items-center flex-col">
        <p className="md:text-[2.75rem] text-[2rem] font-[500] w-[46%]  md:w-[31%] text-center leading-[2.50rem] md:leading-[3.25rem] mt-[1rem]">
        Life at Square
        </p>
        <p className="md:text-[1.25rem] text-[1.125rem] font-[300] text-center md:w-[42%] w-[80%]  md:pt-[2.625rem] pt-[1.635rem] leading-[1.75rem] ">
        This is the place to start, run, and grow your career. At Square,
you&apos;ll find extraordinary benefits and development opportunities
that support who you are both inside and outside the office.
        </p>
      </div>
      {/* slider */}
      <div className='py-[4rem]'>
      <Splide
        options={{
          perPage: 1,
          type: 'loop',
          padding: padd,
          pagination: false,
          perMove: 1,
        }}
      >
        {
            images.map((image, index) => (
                <SplideSlide key={index}>
               <div className='mx-2 flex flex-col items-center justify-center'>
               <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                />
                <p className='mt-6'>{image.title}</p>
               </div>
                </SplideSlide>
            ))}
      </Splide>
      </div>
      {/* another section */}
      
    </>
  )
}

export default Life_at
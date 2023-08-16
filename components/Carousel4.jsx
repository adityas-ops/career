"client-side"

import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Carousal4({ images }) {
  const [padd, setPadd] = useState("1rem");
  const smallScreenHeight = '350px';
  const largeScreenHeight = '600px';

  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd('1rem');
      } else {
        setPadd('12rem');
      }
    };

    // Set initial perPage value
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <div className="">
      <Splide
        options={{
          perPage: 1,
          type: 'loop',
          padding:padd,
          pagination: false,
          perMove: 1,
        }}
      >
        {
            images.map((image, index) => (
                <SplideSlide key={index}>
               <div className='mx-2 flex flex-col items-center justify-center h-[350px] md:h-[600px] '>
               <img
                    key={index}
                    src={image}
                    alt="as"
                    
                   className='h-full w-full  object-cover'
                />
               </div>
                </SplideSlide>
            ))

        }

      </Splide>
      </div>
    </>
  );
}

export default Carousal4;
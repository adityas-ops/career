import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Carousal({images}) {
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
                    src={image}
                    alt="as"
                    
                   
                />
               </div>
                </SplideSlide>
            ))

        }

      </Splide>
      </div>
  )
}

export default Carousal
import React from 'react'
import Carousal from './Carousal'




function Content() {
  const images = [
    'images/corsoul/careers_home_carousel_03.png',
    'images/corsoul/careers_home_carousel_04.png',
    'images/corsoul/careers_home_carousel_05.png',
    'images/corsoul/careers_home_carousel_AU.png',
    'images/corsoul/careers_home_carousel_support.png'
    // Add more images with their respective widths
  ];
  
  return (
    <>
    <div className='w-full h-fit pb-12  flex flex-col items-center'>
        <h4 className='text-center pt-24 text-[30px] font-[500]'>
        Reimagining commerce for all.
        </h4>
        <p className='text-center mt-4 text-[20px] w-[40%]'>
        We’re working to find new and better ways to help <br/> businesses succeed, and we’re looking for people like <br/> you to help shape tomorrow at Square.
        </p>
    </div>
    <div class="relative mt-10">
    <Carousal images={images} />
</div>

    </>
  )
}

export default Content
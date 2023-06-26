import React, { useState } from "react";
import {BiLeftArrowAlt,BiRightArrowAlt} from "react-icons/bi"
const Carousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex,setPrevindex] = useState(images.length-1);
  const [nextIndex,setNextindex] = useState(1);

const handlePrevious = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
  //   change prevIndex and nextIndex
  setPrevindex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );

  setNextindex((nextIndex)=>
  nextIndex === images.length-1 ? 0 : nextIndex+1
  );

};

const handleNext = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
  //   change prevIndex and nextIndex
  setPrevindex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
  setNextindex((nextIndex)=>
  nextIndex === images.length-1 ? 0 : nextIndex+1
  );

};



  return (
    <div className="relative">
    <div className="relative flex  justify-center  h-fit overflow-x-hidden ">
    <div className="flex justify-center carousel  items-center  lg:w-[calc(1320px + 30vw)]  overflow-x-hidden w-[calc(1320px + 25vw)]">
    
     <img src={images[prevIndex]} alt="Carousel Image" className=" w-[70%] h-fit mx-1 object-fill carousel-item" />

  
     <img src={images[currentIndex]} alt="Carousel Image" className="w-[70%] h-fit mx-1 carousel-item" />
 
     <img src={images[nextIndex]} alt="Carousel Image" className="w-[70%] h-fit mx-2 carousel-item" />
  
    </div>
    </div>
    <div className="md:absolute inset-0 px-10 w-[50%] md:w-full my-5 md:my-0 flex items-center justify-between">
        <button
          className="bg-white text-black font-[700] rounded-full p-2 text-[1.5rem] border-[1px] border-black"
          onClick={handlePrevious}
        >
          <BiLeftArrowAlt/>
        </button>
        <button
          className="bg-white text-black font-[700] rounded-full p-2 text-[1.5rem] border-[1px] border-black"
          onClick={handleNext}
        >
         <BiRightArrowAlt/>
        </button>
      </div>
      </div>
  );
};

export default Carousel;

import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-full w-full">
      <div className="carousel carousel-center w-full p-4 relative ">
        {images.map((image, index) => (
          <div key={index} className="carousel-item w-[70%] mx-1  ">
            <img src={image} className="object-fill" />
          </div>
        ))}
        {/* create button for next and prev */}
      </div>
      <div className="carousel-controls z-10 absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between">
        <button className="btn btn-circle" onClick={handlePrevious}>
          ❮
        </button>
        <button className="btn btn-circle" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;

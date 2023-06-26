import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Data = [
  {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
    {
      title:"Design Blog",
      desc:"Get an insider's view of the design culture at Square.",
      link:"see more"
    },
];



function Carousel2() {

  const [perPage, setPerPage] = useState(4);
  const [padd,setPadd] = useState("2rem")

useEffect(() => {
  const handleResize = () => {
    // Adjust perPage based on screen size
    if (window.innerWidth < 768) {
      setPerPage(1);
      setPadd('1rem')
    } else {
      setPerPage(4);
      setPadd('2rem')
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
      <Splide
        options={{
          perPage: perPage,
          type: 'loop',
          padding: padd,
          pagination: false,
          perMove: 1,
        }}
      >
        {Data.map((item, index) => (
          <SplideSlide key={index}>
            <div className="h-[220px] w-[320px] bg-[#fff]">
              <div className="w-full h-3 bg-red-700" />
              <div className="p-5 text-start">
                <p className="font-[500]">{item.title}</p>
                <p className="pt-[1.5rem] font-[300]">{item.desc}</p>
                <Link
                  href="#"
                  className="text-blue-500 flex text-[1rem] font-[500] items-center mt-[1.5rem]"
                >
                  {item.link}
                  <AiOutlineArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default Carousel2;

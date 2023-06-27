import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const cardData = [
    {
        title:'Impressive Smiles, Arlington Heights',
        url:"/images/carsoul2/1.png"
    },
    {
        title:"Birch Coffee, New York City",
        url:"/images/carsoul2/2.png"
    },
    {
        title:"Boke Bowl, Portland",
        url:"/images/carsoul2/3.png"
    },
    {
        title:"Callie's Hot Little Biscuit, Atlanta",
        url:"/images/carsoul2/4.png"
    },
    {
        title:"Birch Coffee, New York City",
        url:"/images/carsoul2/5.png"
    },
    {
        title:"Boke Bowl, Portland",
        url:"/images/carsoul2/6.png"
    },
    {
        title:"Collins Family Orchard, Selah",
        url:"/images/carsoul2/7.png"
    },
    {
        title:"Croque Shop, Brighton",
        url:"/images/carsoul2/8.png"
    },
    {
        title:"Eye Carumba, San Francisco",
        url:"/images/carsoul2/9.png"
    },
    {
        title:"FareStart Restaurant, Seattle",
        url:"/images/carsoul2/10.png"
    },
    {
        title:"Barbershop Club, Los Angeles",
        url:"/images/carsoul2/11.png"
    },
    {
        title:"Birch Coffee, New York City",
        url:"/images/carsoul2/12.png"
    },
    {
        title:"Quest Skinner Art, Washington",
        url:"/images/carsoul2/13.png"
    },
    {
        title:"Reynolds Towing, Urbana",
        url:"/images/carsoul2/14.png"
    },
    {
        title:"Ritual Coffee Roasters, San Francisco",
        url:"/images/carsoul2/15.png"
    },
    {
        title:"Sensory Lab, Melbourne",
        url:"/images/carsoul2/16.png"
    },
    {
         title:"Tori Blush, Vancouver",
        url:"/images/carsoul2/17.png"
    }
]

function Carousel3() {
    const [perPage, setPerPage] = useState(4);
  const [padd,setPadd] = useState("2rem")
const [move,setMove] = useState(3)
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setPerPage(1);
      setPadd('1rem');
      setMove(1);
    } else {
      setPerPage(5);
      setPadd('2rem')
      setMove(3)
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  return (
    <div className='py-[1rem]'>
<Splide
        options={{
          perPage: perPage,
          type: 'loop',
          padding:padd,
          pagination: false,
          perMove: move,
          arrows:false,
          autoplay:"play",
        }}
      >
        {
            cardData.map((image, index) => (
                <SplideSlide key={index}>
               <div className='mx-2 flex flex-col items-center justify-center'>
               <img
                    key={index}
                    src={image.url}
                    alt="as"
                />
                <p className='mt-[2rem] text-center'>{image.title}</p>
               </div>
                </SplideSlide>
            ))

        }
      </Splide>
    </div>
  )
}

export default Carousel3
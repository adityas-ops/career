import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import { AiOutlinePlusCircle,AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const images = [
  {
    src: "/images/corsoul/careers_home_carousel_03.png",
    alt: "image 1",
    title: "Our office events feature local Square sellers.",
  },
  {
    src: "/images/corsoul/careers_home_carousel_04.png",
    alt: "image 2",
    title: "Our office events feature local Square sellers.",
  },
  {
    src: "/images/corsoul/careers_home_carousel_05.png",
    alt: "image 3",
    title: "Our office events feature local Square sellers.",
  },
  {
    src: "/images/corsoul/careers_home_carousel_AU.png",
    alt: "image 4",
    title: "Our office events feature local Square sellers.",
  },
  {
    src: "/images/corsoul/careers_home_carousel_support.png",
    alt: "image 5",
    title: "Our office events feature local Square sellers.",
  },
];


const square = [
  {
    url:"/images/life/square/compete.svg",
    title:"Competitive compensation"
  },
  {
    url:"/images/life/square/healthcare.svg",
    title:"Healthcare coverage",
  },
  {
    url:"/images/life/square/wellness.svg",
    title:"Wellness perks"
  },
  {
    url:"/images/life/square/parental.svg",
    title:"Paid parental leave"
  },
  {
    url:"/images/life/square/stock.svg",
    title:"Employee stock purchase plan"
  },
  {
    url:"/images/life/square/paidtime.svg",
    title:"Paid time off"
  },
  {
    url:"/images/life/square/learning.svg",
    title:"Learning and development"
  },
  {
    url:"/images/life/square/mental.svg",
    title:"Mental health"
  }
]

const common = [
  {
    url:"/images/life/common/black.svg",
    title:"Black Squares Association"
  },
  {
    url:"/images/life/common/latinx.svg",
    title:"Latinx",
  },
  {
    url:"/images/life/common/mental.svg",
    title:"Neurodiversity"
  },
  {
    url:"/images/life/common/parent.svg",
    title:"Parents at Square"
  },
  {
    url:"/images/life/common/squeers.svg",
    title:"Squeers"
  },
  {
    url:"/images/life/common/vetrans.svg",
    title:"Veterans"
  },
  {
    url:"/images/life/common/women.svg",
    title:"WomenEng"
  },
  {
    url:"/images/life/common/womensquare.svg",
    title:"Women at Square"
  }
]

const Cdata = [
  {
    title:"Square on Glassdoor",
    desc:"Discover what current and former employees have to say about their experience at Square.",
    link:"Read employee reviews"
  },
  {
    title:"Square on Linkedin",
    desc:"See who you know at Square and learn more about our company and culture.",
    link:"Connect on linkedin"
  },
  {
    title:"Square Talent Community",
    desc:"Receive updates on open jobs, invitations to events, and info on life at Square.",
    link:"Join the community"
  }
]

function Life_at() {
  const [padd, setPadd] = useState("1rem");

  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd("1rem");
      } else {
        setPadd("10rem");
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
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
      <div className="py-[4rem]">
        <Splide
          options={{
            perPage: 1,
            type: "loop",
            padding: padd,
            pagination: false,
            perMove: 1,
          }}
        >
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <div className="mx-2 flex flex-col items-center justify-center">
                <img key={index} src={image.src} alt={image.alt} />
                <p className="mt-6">{image.title}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* another section */}
      <div className="w-full h-full  flex justify-center mt-10">
        <div className="container  flex justify-center flex-col items-center">
          <p className="py-6 text-[2rem] font-[500] text-center">Creating an equitable workplace.</p>
          <div className="grid md:grid-cols-2 grid-cols-1 w-[80%] py-6 mb-10 gap-4">
            {/* first  */}
            <div className="flex flex-col items-center  ">
              <Image
              src="/images/life/inclusion.svg"
              alt="as"
              width={180}
              height={150}
              />
              <p className="text-[1rem] font-[500] text-center mt-5">Inclusion and diversity</p>
              <p className="font-[300]">We&apos;re building an inclusive economy where all sellers have equal access to opportunity. We strive to live by these same values when building a workplace that is inclusive. Learn more about our ongoing efforts by visiting our <Link href="#" className="text-blue-500 font-[500]"> Inclusion & Diversity website.</Link></p>
            </div>
            {/* second */}
            <div className="flex flex-col items-center  ">
            <Image
              src="/images/life/social.svg"
              alt="as"
              width={180}
              height={150}
              />
              <p className="text-[1rem] font-[500] text-center mt-5">Social impact</p>
              <p className="font-[300]">Driven by our purpose of economic empowerment and our ongoing commitment to racial equity, we&apos;re committed to investing $100 million in support of minority and underserved communities. We also connect employees with volunteer and service opportunities to contribute to their local communities. <Link href="#" className="text-blue-500 font-[500]"> Learn more about our $100 million investment.</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full py-[5rem] flex-col bg-[#6DBAAB] flex justify-center items-center">
          <p className="text-[1.75rem] text-white md:w-[65%] w-[85%] font-[400]">
          “We work hard to build a company where all employees are valued, recognized, and able to succeed. It is important to us that our culture is one where diversity is celebrated and folks of all backgrounds feel they belong.”
          </p>
          <p className="tracking-[1px] text-white text-[1rem] mt-10 text-start  md:w-[65%] w-[85%]">
          SHAWNTEE REED, GLOBAL HEAD OF INCLUSION AND DIVERSITY
          </p>
        </div>
        <div className="py-[3.5rem] flex flex-col items-center ">
            <p className="text-[2rem] font-[500] text-center  md:w-[20%] w-[80%] ">We believe in being fair and square.</p>
            <p className="text-center text-[1.25rem] md:w-[35%] w-[85%]  pt-[1.3rem]">We&apos;re building an inclusive economy where all sellers have equal access to opportunity. We strive to live by these same values in all our workplaces.</p>
            <div className="container b flex justify-center items-center flex-col">
              <div className="grid grid-cols-2 md:grid-cols-4 w-[80%] pt-[3rem]">
                {
                  square.map((item,index)=>{
                      return (
                        <>
                         <div key={index} className="flex flex-col items-center pb-6">
                          <Image 
                          src={item.url}
                          width={196}
                          height={66}
                          className="w-[196px] h-[80px]"
                          alt={item.title}
                          />
                          <p className="text-center mt-[1.5rem] font-[300] text-gray-800">{item.title} </p>
                         </div>
                        </>
                      )
                  })
                }
              </div>
              <div className="w-full flex mt-6  justify-center text-blue-600">
                    <Link href="#" className="text-center flex items-center justify-center flex-col">
                      <p className="font-[500]">View benefits details</p>
                      <AiOutlinePlusCircle className="text-4xl"/>
                    </Link>
              </div>
            </div>
        </div>
        <div className="w-full pt-10 md:pt-16 pb-10 bg-[#F2F2F2] flex flex-col items-center font-[400]">
          <p className="text-[2rem] font-[500] text-center">We all have something in common.</p>
          <p className="text-center w-[90%] pt-[1.5rem] md:w-[45%] leading-[1.5rem]">At Square, our purpose is to empower, both inside and outside our walls. We know that to build the best tools for the businesses that we support we have to start with a workforce as diverse and empowered as our sellers and customers.</p>
          <p className="text-center w-[90%] pt-[1rem] md:w-[45%] leading-[1.5rem]">Communities are our employee-run resource groups that promote universal inclusivity through networking, development opportunities, and social events.</p>
          <div className="container b flex justify-center items-center flex-col">
              <div className="grid grid-cols-2 md:grid-cols-4 w-[80%] pt-[3rem]">
                {
                  common.map((item,index)=>{
                      return (
                        <>
                         <div key={index} className="flex flex-col items-center pb-6">
                          <Image 
                          src={item.url}
                          width={196}
                          height={66}
                          className="w-[196px] h-[50px]"
                          alt={item.title}
                          />
                          <p className="text-center mt-[1.5rem] font-[300] text-gray-800">{item.title} </p>
                         </div>
                        </>
                      )
                  })
                }
              </div>
              <div className="w-full flex mt-6  justify-center text-blue-600">
                    <Link href="#" className="text-center flex items-center justify-center flex-col">
                      <p className="font-[500]">View all our Communities</p>
                      <AiOutlinePlusCircle className="text-4xl"/>
                    </Link>
              </div>
              </div>
        </div>
        <div className=" w-full  flex justify-center ">
        <div className="mt-[3.75rem] w-full flex flex-col items-center justify-center">
          <Image
            src="/images/life/capture.svg"
            height={100}
            width={100}
            alt="Picture of the author"
          />
          <p className="pt-[2rem] text-[2rem] font-[500] text-center">
          Find the right opportunity at Square.
          </p>
          <Link
            href="#"
            className="w-[150px] h-[32px] my-[2rem] btn text-[12px]  bg-blue-700 text-center text-white rounded-[10px]"
          >
            search all jobs
          </Link>
        </div>
      </div>
      <div className="bg-[#f2f2f2] w-full mt-10 py-10 flex justify-center">
      <div className="container flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-4">
                    {
                      Cdata.map((item,index)=>{
                        return(
                          <>
                          <div key={index} className="flex flex-col   h-[230px] w-[320px] bg-white shadow-md py-8 px-6">
                            <p className="text-start text-[1.125rem] font-[500]">{item.title}</p>
                            <p className="pt-[1rem] text-[1rem] leading-[1.75rem]">{item.desc}</p>
                            <Link href="#" className="text-blue-600 pt-[1.5rem] font-[500] ml-2 flex items-center justify-start">
                            {item.link} <AiOutlineArrowRight className="ml-1"/>
                            </Link>
                            </div>  
                          </>
                        )
                      })
                    }
                </div>
      </div>
      </div>
    </>
  );
}

export default Life_at;

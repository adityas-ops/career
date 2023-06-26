import React from "react";
import Carousal from "./Carousal";
import Carousel2 from "./Carousel2";
import Image from "next/image";
import Link from "next/link";
import Cards from "./Cards";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Content() {
  const images = [
    "images/corsoul/careers_home_carousel_03.png",
    "images/corsoul/careers_home_carousel_04.png",
    "images/corsoul/careers_home_carousel_05.png",
    "images/corsoul/careers_home_carousel_AU.png",
    "images/corsoul/careers_home_carousel_support.png",
    // Add more images with their respective widths
  ];

  const cardData = [
    {
      title: "Interviewing at Square",
      desc: "We structure our interviews to be a reflection of our core values.",
      linkWord: "Our interview process",
      img: "/images/svgs/1.svg",
      height: "153",
      weight: "140",
    },
    {
      title: "Offices across the globe",
      desc: "We have Squares in dozens of locations around the world, including 15 offices from London to Tokyo.",
      linkWord: "View Square office locations",
      img: "/images/svgs/2.svg",
      height: "140",
      weight: "185",
    },
    {
      title: "Emerging talent opportunities",
      desc: "Roles are available for interns and new graduates. Many recent grads launch their careers at Square.",
      linkWord: "Our Emerging Talent programs",
      img: "/images/svgs/3.svg",
      height: "140",
      weight: "185",
    },
    {
      title: "Life at Square",
      desc: "Enjoy competitive compensation, outstanding benefits, and a supportive culture for you, in and out of the office.",
      linkWord: "More on our culture",
      img: "/images/svgs/4.svg",
      height: "140",
      weight: "185",
    },
  ];

  return (
    <>
      <div className="w-full h-fit pb-12  flex flex-col items-center">
        <h4 className="text-center pt-24 text-[30px] font-[500]">
          Reimagining commerce for all.
        </h4>
        <p className="text-center mt-4 text-[20px] w-[40%]">
          We’re working to find new and better ways to help <br /> businesses
          succeed, and we’re looking for people like <br /> you to help shape
          tomorrow at Square.
        </p>
      </div>
      <div class="relative mt-10">
        <Carousal images={images} />
      </div>
      <div className="py-10">
        <div className="w-full flex items-center flex-col">
          <Image
            src="/images/svgs/PD01401_-_hand_careers_icon_large.svg"
            alt="Picture of the author"
            width={108}
            height={108}
          />
          <h3 className=" font-square-medium text-[1.75rem] font-[500] mt-[2rem]">
            Helping local businesses worldwide.
          </h3>
          <p className="mt-[2rem] leading-[28px]  font-[400] text-center w-[85%] lg:w-[70%] ">
            We started with a little white card reader but haven&apos;t stopped
            there. Our purpose is economic empowerment, and we&apos;re building
            tools to help sellers of all sizes succeed on their own terms. Read,
            watch, and listen to our seller stories in{" "}
            <Link href="#" className="font-[500] text-blue-700">
              Black Owned
            </Link>
            ,{" "}
            <Link className="font-[500] text-blue-700" href="#">
              For Every Dream
            </Link>
            , and{" "}
            <Link className="font-[500] text-blue-700" href="#">
              Talking Squarely.
            </Link>
          </p>
          <Link
            href="#"
            className="flex flex-col text-blue-500 text-center mt-[3rem]"
          >
            <p> Learn more</p>
            <div className="w-full flex justify-center text-4xl">
              <AiOutlinePlusCircle />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center mt-[2rem]">
        <div className="container flex flex-col items-center justify-center ">
          <div className="md:w-[75%] w-[90%] grid md:grid-cols-2 grid-cols-1   gap-5 pb-[3rem]">
            {cardData.map((data, index) => {
              return <Cards cardData={data} key={index} />;
            })}
          </div>
          <div className="mt-[3rem] w-[90%] md:w-[75%]  flex justify-center border-y-[0.5px]  border-gray-800">
              <div className="mt-[3.75rem] w-full flex flex-col items-center justify-center">
                <Image
                  src="/images/svgs/sun.svg"
                  height={100}
                  width={100}
                  alt="Picture of the author"
                  />
                <p className="pt-[2rem] text-[2rem] font-[500]">Find the right opportunity at Square.</p>
                <Link 
                href="#"
                className="w-[150px] h-[32px] my-[2rem] btn text-[12px]  bg-blue-700 text-center text-white rounded-[10px]"
                >search all jobs</Link>
              </div>
          </div>
          <div className="w-[75%] grid md:grid-cols-2 grid-cols-1 py-[3.75rem]">
              <Image
                src="/images/svgs/fastco.svg"
                height={190}
                width={420}
                alt="s"
                />
                <Image
                src="/images/svgs/hired.svg"
                height={190}
                width={420}
                alt="s"
                />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

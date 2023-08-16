import Carousal4 from "@/components/Carousel4";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const images = [
  "/images/emerging/img1.avif",
  "/images/emerging/img2.jpeg",
  "/images/emerging/img3.avif",
];

const Cdata = [
  {
    title:"Leadership",
    desc:"Lead with confidence and inspire others.",
  },
  {
    title:"Teamwork",
    desc:"Collaborate and achieve more together.",
  
  },
  {
    title:"Communication",
    desc:"Articulate your ideas like a pro.",
  
  }
]


function Emerging() {
  return (
    <>
      <div className="md:pt-[4.25rem] pt-[3.25rem]  flex justify-center items-center flex-col">
        <p className="md:text-[2.75rem] text-[2rem] font-[500] sm:w-[46%]  md:w-[31%] text-center leading-[2.5rem] md:leading-[3.75rem] mt-[1rem]">
          Opportunities for <br />
          emerging talent.
        </p>
        <p className="text-[1.25rem] sm:block hidden  font-[300] text-center w-[42%]   md:mb-[25px] pt-[1.635rem] leading-[1.75rem] ">
          Surround yourself with limitless possibilities. Bring
          <br />
          your talents and launch your career at Square.
        </p>
        <p className=" sm:hidden block text-[1.125rem] px-[50px] font-[300] text-center w-[100%]   md:mb-[25px] pt-[1.635rem] leading-[1.75rem] ">
          Surround yourself with limitless possibilities. Bring
          your talents and launch your career at Square.
        </p>
        <div className="w-full mt-[20px] sm:mt-0 flex justify-center">
          <div className=" text-white bg-[#006aff] min-h-[50px] py-[13px] px-[20px] text-[1rem] font-sans rounded-[5px]">
            <Link href="/">View opportunities</Link>
          </div>
        </div>
      </div>
      <div className=" w-full h-full my-[5rem] ">
        <Carousal4 images={images} />
      </div>
      <div className=" w-full max-w-full h-full  sm:max-w-[74.06%] mx-auto">
      {/*  card start */}
        <div className="sm:px-[40px] px-0  pb-[80px] flex flex-col sm:flex-row ">
          <div className=" w-full sm:w-1/2 h-full items-center justify-center flex">
            <img src="/images/emerging/svg1.avif" alt="ad" className=" w-[324px] h-[224px]" />
          </div>
          {/* second div for content */}
          <div className=" px-[50px] sm:pl-[80px] sm:pr-[10px] pb-[20px] flex items-center">
            <div className="w-fit h-fit">
              <h3 className=" font-sans mb-[14px] text-[20px] sm:text-[1.5rem] font-[500]">
              Join forces to create a true impact
              </h3>
              <p className=" font-sans pb-[20px] w-full sm:w-[85%]">
              Develop valuable skills and collaborate with like-
minded teenagers on impactful projects.
              </p>
              <div class="flex w-full text-[#006aff]  font-[500] font-sans ">
                <Link
                  class="flex items-center "
                  href="https://developer.squareup.com/blog/empowering-businesses-what-its-like-to-intern-at-square/"
                >
                  Our intern culture <AiOutlineArrowRight className=" ml-[3px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  card end */}
        {/*  card start */}
        <div className="sm:px-[40px] px-0  pb-[80px] flex flex-col sm:flex-row-reverse ">
          <div className=" w-full sm:w-1/2 h-full items-center justify-center flex">
            <img src="/images/emerging/svg2.avif" alt="ad" className=" w-[324px] h-[224px]" />
          </div>
          {/* second div for content */}
          <div className=" px-[50px] sm:pl-[80px] sm:pr-[10px] pb-[20px] flex items-center">
            <div className="w-fit h-fit">
              <h3 className=" font-sans mb-[14px] text-[20px] sm:text-[1.5rem] font-[500]">
              Empower and Celebrate
              </h3>
              <p className=" font-sans pb-[20px] w-full sm:w-[85%]">
              Join an empowering community that celebrates your achievements and fuels your passion
              </p>
              <div class="flex w-full text-[#006aff]  font-[500] font-sans ">
                <Link
                  class="flex items-center "
                  href="https://developer.squareup.com/blog/empowering-businesses-what-its-like-to-intern-at-square/"
                >
                  Our intern culture <AiOutlineArrowRight className=" ml-[3px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  card end */}
        {/*  card start */}
        <div className="sm:px-[40px] px-0  pb-[80px] flex flex-col sm:flex-row ">
          <div className=" w-full sm:w-1/2 h-full items-center justify-center flex">
            <img src="/images/emerging/svg3.avif" alt="ad" className=" w-[324px] h-[224px]" />
          </div>
          {/* second div for content */}
          <div className=" px-[50px] sm:pl-[80px] sm:pr-[10px] pb-[20px] flex items-center">
            <div className="w-fit h-fit">
              <h3 className=" font-sans mb-[14px] text-[20px] sm:text-[1.5rem] font-[500]">
                Aligning with our purpose
              </h3>
              <p className=" font-sans pb-[20px] w-full sm:w-[85%]">
                Help bring economic empowerment to all our sellers and build the
                future of commerce.
              </p>
              <div class="flex w-full text-[#006aff]  font-[500] font-sans ">
                <Link
                  class="flex items-center "
                  href="https://developer.squareup.com/blog/empowering-businesses-what-its-like-to-intern-at-square/"
                >
                  Our intern culture <AiOutlineArrowRight className=" ml-[3px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  card end */}
        
      </div>
      <div className="w-full h-full py-[5rem] flex-col bg-[#6DBAAB] flex justify-center items-center">
          <p className="text-[1.75rem] text-white text-center  w-[85%] font-[400]">
          “Innovative Networking for ambitious teenagers”
          </p>
         
        </div>
        <div className=" flex items-center justify-center mt-[5rem] pb-[40px] sm:pb-[80px]">
        <div className="">
          <div className=" px-[10px] mb-[20px] flex justify-center">
              <img src="/images/emerging/PD01401_-_rocket_careers_large_icons.svg" alt="as" className=""/>
          </div>
          <div className=" mb-[20px]">
          <h3 className=" sm:text-[2rem] text-[1.5rem] font-sans font-[500]">Launch your career at Square.</h3>
          </div>
          <div className="w-full flex justify-center">
          <div className=" text-white bg-[#006aff] min-h-[50px] py-[13px] px-[20px] text-[1rem] font-sans rounded-[5px]">
            <Link href="/">View opportunities</Link>
          </div>
        </div>
          </div>
        </div>
        <div className="bg-[#f2f2f2] w-full mt-10 py-10 flex justify-center">
      <div className="container flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-4">
                    {
                      Cdata.map((item,index)=>{
                        return(
                          <>
                          <div key={index} className="flex flex-col   h-[180px] w-[320px] bg-white shadow-md py-8 px-6">
                            <p className="text-start text-[1.125rem] font-[700]">{item.title}</p>
                            <p className="pt-[1rem] text-[1rem] leading-[1.75rem]">{item.desc}</p>
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

export default Emerging;

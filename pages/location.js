import React from 'react'
import CountUp from 'react-countup';
function location() {
  return (
  <>
   
    <div className=' w-full mt-[5rem] max-w-[1280px] mx-auto sm:h-[185px]'>
      <div className=' flex flex-col sm:flex-row justify-between items-center sm:mx-[206px]  mx-auto text-[56px] sm:text-[62px] text-[#006AFF] font-[300] font-square-regular'>
        <div >
       <p className=' leading-[1] '> <CountUp  end={464} /></p>
       <p className=' font-sans text-[1rem] text-black'>Open jobs globally</p>
        </div>
        <div className='mt-[30px]'>
        <p className=' leading-[1] '><CountUp  decimals={2} end={3.10} />k</p>
        <p className=' font-sans text-[1rem] text-black'>Open jobs globally</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default location
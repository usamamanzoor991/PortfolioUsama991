import React from 'react';

const Three = () => {
  return (
    <div className='md:min-h-[100vh] w-[100%]  flex justify-center items-center relative max-md:h-[50vw] max-md:mt-[7vw] max-md:mb-[14vw]'>
        <img className='h-[30vw] z-10 absolute max-md:h-[90vw]' src="/laptop3.svg" alt="" />
        <video className='h-[13vw] mb-[7vw] max-md:h-[39vw] max-md:mb-[21vw]' autoPlay loop muted>
            <source src="/video5.mp4" type="video/mp4" />
        </video>
        <div className='h-[3px] w-[60vw] bg-amber-950 absolute z-[-10] top-[35%] left-[30%] max-md:hidden'></div>
        <div className='h-[3px] w-[60vw] bg-amber-950 absolute z-[-10] top-[45%] right-[30%] max-md:hidden'></div>
        <div className='h-[3px] w-[50vw] bg-amber-950 absolute z-[-10] top-[55%]  max-md:hidden'></div>
    </div>
  )
}

export default Three;
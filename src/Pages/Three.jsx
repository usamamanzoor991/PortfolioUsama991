import React from 'react';

const Three = () => {
  return (
    <div className='min-h-[100vh] w-[100%]  flex justify-center items-center relative'>
        <img className='h-[30vw] z-10 absolute' src="/laptop3.svg" alt="" />
        <video className='h-[13vw] mb-[7vw]' autoPlay loop muted>
            <source src="/video5.mp4" type="video/mp4" />
        </video>
        <div className='h-[3px] w-[60vw] bg-amber-950 absolute z-[-10] top-[35%] left-[30%]'></div>
        <div className='h-[3px] w-[60vw] bg-amber-950 absolute z-[-10] top-[45%] right-[30%]'></div>
        <div className='h-[3px] w-[50vw] bg-amber-950 absolute z-[-10] top-[55%]'></div>
    </div>
  )
}

export default Three;
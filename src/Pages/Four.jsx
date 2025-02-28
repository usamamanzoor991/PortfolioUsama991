import React from 'react';

const Four = () => {
  return (
    <div className='md:h-[100vh] p-4 max-md:h-[50vh]'>
        <div className='bg-black h-full w-full rounded-[36px] relative max-md:rounded-[12px]'>
          <video className='h-full w-full object-cover rounded-[36px] max-md:rounded-[12px]' autoPlay loop muted>
              <source src="/video4.mp4" type="video/mp4" />
          </video>
          <h1 style={{fontSize: "16vw"}} className='absolute left-13 bottom-2 font-[main] text-white max-md:left-5'>ABOUT</h1>
        </div>
    </div>
  )
}

export default Four;
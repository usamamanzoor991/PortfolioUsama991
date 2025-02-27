import React from 'react';

const Four = () => {
  return (
    <div className='h-[100vh] p-4'>
        <div className='bg-black h-full w-full rounded-[36px] relative'>
          <video className='h-full w-full object-cover rounded-[36px]' autoPlay loop muted>
              <source src="/video4.mp4" type="video/mp4" />
          </video>
          <h1 style={{fontSize: "16vw"}} className='absolute left-13 bottom-2 font-[main] text-white'>ABOUT</h1>
        </div>
    </div>
  )
}

export default Four;
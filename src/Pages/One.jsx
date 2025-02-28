import React, { useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const One = () => {

  const tiltRef = useRef(null);
  const [tiltX,setTiltX] = useState(null);
  const [tiltY,setTiltY] = useState(null);

  const handleMouseMove = (e) => {
    setTiltY(e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2);
    setTiltX(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2);
  }

  useGSAP(()=>{
    gsap.to(tiltRef.current,{
      rotateX: -tiltX/5,
      rotateY: tiltY/10,
      duration: 0.8,
      ease: "elastic.out(1,0.3)",
    })
  },[tiltX,tiltY])

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} className='h-screen p-4 relative max-md:p-2 max-md:h-[50vh]'>
        <div id='page1-in' className='h-full w-full md:bg-[url(/Self2.png)] bg-center bg-cover rounded-[36px] shadow-lg shadow-gray-600 flex flex-col items-start justify-between pt-[3vw] pl-[5vw] pb-[3vw] max-md:rounded-[12px] max-md:h-[50vh] max-md:bg-emerald-300'>
          <div className='flex items-end'>
            <i className="ri-circle-line text-white text-[48px] font-extrabold"></i>
            <i className="ri-circle-fill text-white pb-2"></i>
          </div>
          <div id='move' ref={tiltRef} className='text-white text-[48px] font-[main] font-bold max-md:text-[36px] max-md:text-gray-600'>
            I am <span className='text-gray-700 max-md:text-black'>Dark Mode</span><sup>TM</sup><br /> Designer To Hire
          </div>
          <div className='text-white'>
            Brand Design | Website Design <br />
            Web Developer
          </div>
        </div>
    </div>
  )
}

export default One;
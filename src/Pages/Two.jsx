import React from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const Two = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from(".first",{
            duration: 1,
            opacity: 0,
            stagger: 1,
            transform: 'rotateX(-90deg)',
            scrollTrigger: {
                trigger: ".first",
                start: "Top 50%",
                end: "Top -180%",
                scroller: "body",
                scrub: 1,
            }
        })
    })

  return (
    <div id='section2' className='min-h-[100vh] w-full flex flex-col items-center mt-20'>
        <h1 id='first' style={{fontSize: '18vw'}} className='font-[main] first'>IMPACTFUL</h1>
        <h1 id='first' style={{fontSize: '18vw'}} className='font-[main] first'>DESIGN</h1>
        <h1 id='first' style={{fontSize: '18vw'}} className='font-[main] first'>IS THE</h1>
        <h1 id='first' style={{fontSize: '18vw'}} className='font-[main] first'>DESIGN</h1>
        <h1 id='first' style={{fontSize: '18vw'}} className='font-[main] first'>THAT </h1>
        <h1 id='first' style={{fontSize: '18vw'}} className='font-[main] first'>WORKS</h1>
        <div className='flex justify-between items-center mt-20 mb-10 w-[60vw]'>
            <img src="/Tesla.png" />
            <img src="/Figma.png" />
            <img src="/Breakpoint.png" />
            <img src="/Pixar.png" />
            <img src="/Google.png" />
            <img src="/Behance.png" />
        </div>
        <div className='w-[65vw] h-[3px] bg-black mb-10 mt-10'></div>
    </div>
  )
}

export default Two;
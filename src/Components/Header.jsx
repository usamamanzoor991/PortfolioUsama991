import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className="fixed w-full z-10 flex flex-row items-center justify-end p-14 max-md:p-5">
      <button className='bg-black text-white px-3 py-2 border-4 border-white rounded-2xl hover:text-black hover:bg-gray-300 hover:border-black hover:cursor-pointer'>Hire Me</button>
      <i className="ri-more-2-fill text-gray-900 text-2xl ml-2 hover:cursor-pointer"></i>
    </div>
  )
}

export default Header;
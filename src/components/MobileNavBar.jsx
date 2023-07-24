import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function MobileNavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=''>
      <div className="flex justify-evenly md:hidden pt-4 fixed top-0 w-full bg-[#FF0000]">
        <h1 className='text-5xl'>Serfuego_</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={`${toggle
            ? 'gray'
            : 'black'}`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-12 pt-1 "
          onClick={() => setToggle((prev) => !prev)}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>

        <div
          className={`${toggle
            ? 'flex'
            : 'hidden'} 
            absolute top-16 justify-center left-0 pr-3 h-screen
             w-full min-w-[140px]
            opacity-90 bg-[#FF0000]`}>

          <ul className="flex flex-col items-center justify-evenly text-4xl">

            <Link to='/about' className='text-right'
              onClick={() => setToggle((prev) => !prev)}>
              <span >About</span>
            </Link>

            <Link to='/contact' className='text-center'
              onClick={() => setToggle((prev) => !prev)}>
              <span >Contact</span>
            </Link>

            <Link to='/installation' className='text-right'
              onClick={() => setToggle((prev) => !prev)}>
              <span >Installation</span>
            </Link>

          </ul>

        </div>
      </div>
    </div>
  )
}

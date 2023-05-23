import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function MobileHome() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex justify-between sm:hidden">

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
            absolute top-32 justify-center left-0 pr-3 w-full min-w-[140px]
            bg-white opacity-90`}>

          <ul className="flex flex-col items-center">

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

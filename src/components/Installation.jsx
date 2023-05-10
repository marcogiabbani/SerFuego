import React from 'react'
import { Link } from 'react-router-dom';

export default function Installation() {
  return (
    <div className='bg-[#ED1B24] h-screen px-14'>
      <Link to='/'>

        <h1 className='text-[60px] pt-3 text-[#251F20]'>Serfuego_</h1>

      </Link>

      <div className='flex flex-col text-[#251F20] text-9xl pl-48 pt-32 text'>

        <div className='pr-32'>
          <p className=' text-[60px]'>
          Visual project that develops between 2016 and 2018.
          </p>
          <p className=' text-[60px]'>
          Serfuego© is the combination of an Artistic branding and the new look
          at the Culture design. It ranges from astrology to the most luxurious
          objects of
          worship.
          </p>
          <p className=' text-[60px]'>
          The identity of a period of time of a remoto Studio
          producing pieces of <span className='underline'> Art & Design</span>
          </p>
        </div>

        <div className='h-32 flex flex-col justify-evenly'>

          <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="64.5" y2="0" stroke="black" strokeWidth="0.1" />
          </svg>
          <span className='h- text-[30px] align-baseline'> The phenomenon of combustion manifested in light, flame and heat.</span>

        </div>

      </div>

      <div className='flex justify-between'>

        <div className='w-40 flex justify-between'>
          <span>  F  </span>
          <span>  B  </span>
          <span>  I  </span>
          <span>  T  </span>
        </div>

        <Link to='/'>
          <div>
            <span className='text-[30px]'>SF ©</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

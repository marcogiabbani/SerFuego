import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {

  return (
    <div className='bg-black h-screen'>
      <div className='flex flex-col text-red-600 text-9xl px-24 pt-16'>

        <span className='max-h-[110px] text-[150px]'>Francisco Matte</span>
        <span className='max-h-[110px] text-[150px]'>Design & ArtDirection</span>
        <span className='max-h-[110px] text-[150px]'>(+54) 11 3557 7072</span>
        <span className='max-h-[110px] text-[150px]'>fuego@serfuego.com</span>
        <span className='max-h-[110px] text-[150px]'>@serfuego</span>
        <span className='max-h-[110px] text-[150px]'>born in Barcelona_</span>
        <div>
          <span></span>
          <span className='h-[110px] text-[40px] align-baseline'> The phenomenon of combustion manifested in light, flame and heat.</span>
          <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100" y2="0" stroke="red" strokeWidth="0.1" />

          </svg>

        </div>
      </div>
      <div className='flex justify-between text-red-500  px-24'>

        <div className='flex flex-col'>

          <div className='w-40 flex justify-between'>
            <span>  F  </span>
            <span>  B  </span>
            <span>  I  </span>
            <span>  T  </span>
          </div>

        </div>

        <Link to='/'>
          <div className='flex flex-col justify-between'>
            <span className='text-[30px]'>SF ©</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

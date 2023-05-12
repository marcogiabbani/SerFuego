import React from 'react'
import Footer from './Footer';

export default function Contact() {

  return (
    <div className='bg-black h-screen text-[#FF0000]'>
      <div className='flex flex-col justify-between h-screen'>
        <div className='flex flex-col text-9xl px-24 pt-16'>

          <span className='max-h-[110px] text-[150px]'>Francisco Matte</span>
          <span className='max-h-[110px] text-[150px]'>Design & ArtDirection</span>
          <span className='max-h-[110px] text-[150px]'>(+54) 11 3420 0305</span>
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

        <div className='px-16'>
          <Footer />
        </div>
      </div>

    </div>
  )
}

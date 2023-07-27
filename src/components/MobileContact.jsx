import React from 'react'
import MobileFooter from './MobileFooter'

function MobileContact() {
  return (
    <div className='bg-[#FF0000] px-2 '>
      <div className='h-[85vh] mt-0 flex flex-col justify-between'>
        <div className='h-full flex flex-col text-4xl m-auto'>
          <span className='pb-3'>Francisco Matte</span>
          <span className='pb-3'>Design & ArtDirection</span>
          <span className='pb-3'>(+54) 11 3420 0305</span>
          <span className='pb-3'>fuego@serfuego.com</span>
          <span className='pb-3'>@serfuego</span>
          <span className='pb-3'>born in Barcelona_</span>
        </div>
        <div className='h-full flex flex-col justify-between'>
          <div className='text-center h-full'>
            <span className=''>
              The phenomenon of combustion manifested in light, flame and heat.
            </span>
          </div>
          <div className='h-full'>
            <MobileFooter />
          </div>

        </div>
      </div>
    </div>
  )
}

export default MobileContact
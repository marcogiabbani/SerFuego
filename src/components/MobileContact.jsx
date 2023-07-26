import React from 'react'
import MobileFooter from './MobileFooter'

function MobileContact() {
  return (
    <div className='bg-[#FF0000] px-2 '>
      <div className='h-[85vh] flex flex-col justify-between'>
        <div className='flex flex-col text-4xl'>
          <span className=''>Francisco Matte</span>
          <span className=''>Design & ArtDirection</span>
          <span className=''>(+54) 11 3420 0305</span>
          <span className=''>fuego@serfuego.com</span>
          <span className=''>@serfuego</span>
          <span className=''>born in Barcelona_</span>
        </div>
        <div className='text-center'>
          <span>
            The phenomenon of combustion manifested in light, flame and heat.
          </span>
        </div>
        <div className=''>
          <MobileFooter/>
        </div>
      </div>
    </div>
  )
}

export default MobileContact
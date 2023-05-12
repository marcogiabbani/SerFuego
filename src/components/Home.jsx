import React from 'react'

import NavBar from './NavBar'
import Ellipse from './Ellipse'

function Home() {

  return (
    <div className='flex flex-col justify-evenly px-16 '>

      <div className='flex justify-between h-[15vh] mt-10 px-7'>
        <h1 className='text-[60px] '>Serfuego_</h1>
        <NavBar />
      </div>

      <div className='w-[100%]'>
        <Ellipse />
      </div>

      <div className='flex justify-between px-7  text-xl '>

        <div className='flex flex-col'>

          <span>-</span>
          <span>Serfuego</span>
          <span>Design & ArtDirection</span>
          <span>(+54) 11 3420 0305</span>
          <span>fuego@serfuego.com</span>
          <span>-</span>

          <div className='w-40 flex justify-between'>
            <span>  F  </span>
            <span>  B  </span>
            <span>  I  </span>
            <span>  T  </span>
          </div>

        </div>

        <div className='flex flex-col justify-between'>
          <span></span>
          <span className='text-[30px]'>SF ©</span>
        </div>

      </div>

    </div>

  )
}

export default Home

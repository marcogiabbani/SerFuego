import React from 'react'

import NavBar from './NavBar'
import ImageToggle from './ImageToggle'

function Home() {

  return (
    <div className='h-screen flex flex-col justify-evenly px-16'>
      <div className='flex justify-between h-[15vh] mt-10 px-7'>
        <h1 className='text-[60px]'>Serfuego_</h1>
        <NavBar />

      </div>

      <div className='w-[100%] my-5'>
        <ImageToggle />
      </div>

      <div className='flex justify-between px-7'>

        <div className='flex flex-col'>
          <span>-</span>
          <span>data 1</span>
          <span>data 2</span>
          <span>data 3</span>
          <span>data 4</span>
          <span>-</span>

          <div>
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

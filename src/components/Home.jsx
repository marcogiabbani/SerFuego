import React from 'react'

import NavBar from './NavBar'
import Ellipse from './Ellipse'
import Footer from './Footer'

function Home() {

  return (
    <div className=' h-screen flex flex-col justify-between px-16 '>

      <div className='flex justify-between h-[15vh] mt-10 px-7'>
        <h1 className='text-[60px] '>Serfuego_</h1>
        <NavBar />
      </div>

      <div className='w-[100%]'>
        <Ellipse />
      </div>
      <div className='flex flex-col '>

        <span>-</span>
        <span>Serfuego</span>
        <span>Design & ArtDirection</span>
        <span>(+54) 11 3420 0305</span>
        <span>fuego@serfuego.com</span>
        <span>-</span>

      </div>

      <Footer />

    </div>

  )
}

export default Home

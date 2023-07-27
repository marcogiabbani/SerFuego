import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// import NavBar from './NavBar'
import About from './About'
import Ellipse from './Ellipse'
import MobileFooter from './MobileFooter';

function Home() {

  const [about, setAbout] = useState(false);

  return (
    <div className=' h-screen flex flex-col justify-between px-16 '>

      {about && <About />}

      <div className='flex justify-between h-[15vh] mt-10 px-7'>

        <h1 className='text-[70px]'>Serfuego_</h1>

        <div className='flex flex-col w-1/5 justify-between text-xl'>

          <span className='text-left cursor-pointer' onClick={() => setAbout(!about)}>About</span>

          <Link to='/contact' className='text-center'>
            <span >Contact</span>
          </Link>

          <Link to='/installation' className='text-right'>
            <span >Installation</span>
          </Link>

        </div>

      </div>

      <div className='w-[100%]'>
        <Ellipse />
      </div>

      <div className='flex flex-col '>

        <span>-</span>
        <span>Serfuego</span>
        <span>Design & ArtDirection</span>
        <span>(+54) 11 3420 0305</span>
        <span>fuego@serfuego.online</span>
        <span>-</span>

      </div>

      <MobileFooter />

    </div>

  )
}

export default Home

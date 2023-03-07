import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'


function App() {

  const [background, setBackground] = useState('#262626')

  const divRef = useRef(null)

  const toggleBackground = () => {
    const color = background !== '#5a7d95'
      ? '#5a7d95'
      : '#1b4943'
    setBackground(color)
  }

  useEffect(() => {
    gsap.to(divRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: 'none' })

  }, [background])

  useEffect(() => {

    gsap.from(divRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    })
    console.log('hola')

  }, [divRef])

  return (
    <div className='h-[500vh]'>
      <div ref={divRef} className='h-[100vh] bg-green-500'>
        <p className='text-center text-white text-2xl'>
          Scroll downs
        </p>
        <button
          onClick={() => toggleBackground()}
          className='bg-white'>toggleBackground</button>
      </div>
      <div className='h-[100vh] bg-yellow-300'>2</div>
      <div className='h-[100vh] bg-blue-600'>3</div>
      <div className='h-[100vh] bg-slate-500'>4</div>
      <div className='h-[100vh] bg-green-500'>5</div>



    </div>
  )
}

export default App

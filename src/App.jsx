import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'


function App() {

  const divRef = useRef(null)

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
      </div>
      <div className='h-[100vh] bg-yellow-300'>2</div>
      <div className='h-[100vh] bg-blue-600'>3</div>
      <div className='h-[100vh] bg-slate-500'>4</div>
      <div className='h-[100vh] bg-green-500'>5</div>



    </div>
  )
}

export default App

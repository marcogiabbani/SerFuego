import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'


const sections = [
  {
    title: 'Title 1',
    subtitle: 'Subtitle 1'
  },
  {
    title: 'Title 2',
    subtitle: 'Subtitle 2'
  },
  {
    title: 'Title 3',
    subtitle: 'Subtitle 3'
  },
  {
    title: 'Title 4',
    subtitle: 'Subtitle 4'
  },
  {
    title: 'Title 5',
    subtitle: 'Subtitle 5'
  },
]


function App() {

  const [background, setBackground] = useState('#262626')

  const divRef = useRef(null)
  const revealRefs = useRef([])
  revealRefs.current = []

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


  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
    console.log(revealRefs.current)
  }

  return (
    <div className=''>
      <div ref={divRef} className='h-[100vh] bg-green-500'>
        <p className='text-center text-white text-2xl'>
          Scroll downs
        </p>
        <button
          onClick={() => toggleBackground()}
          className='bg-white'>toggleBackground</button>
      </div>

      <div className='flex flex-col justify-center h-[100vh]'>
        {
          sections.map(({ title, subtitle }) => {
            return (
              <div
                key={title}
                ref={addToRefs}
                className='h-32 w-40 bg-white m-auto'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App

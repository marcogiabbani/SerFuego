import React from 'react'
import OvalButton from './components/ovalButton'

function App() {

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div className='flex justify-between'>
        <h1>SerFuego</h1>
        <div className='flex flex-col'>
          <span>about</span>
          <span>contact</span>
          <span>installation</span>
        </div>
      </div>
      <div className='w-[70vw] m-auto'>

        <OvalButton />

      </div>
      <div className='flex justify-between'>
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
        <h1>SerFuego</h1>
      </div>

    </div>

  )
}

export default App

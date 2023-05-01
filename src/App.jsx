import React from 'react'
import './App.css'
// import ImageDisplay from './components/hover'
// import Oval from './components/oval'
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

        {/* <ImageDisplay /> */}

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
          <ellipse cx="50" cy="25" rx="50" ry="25"
            stroke="#000000" fill="none" strokeWidth="0.1"/>
        </svg> */}
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

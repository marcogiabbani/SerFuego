import React from 'react'
import {
  Route, Routes, HashRouter
} from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import Installation from './components/Installation';

function App() {

  return (

    <HashRouter>
      <div className='h-[99vh] flex flex-col justify-between'>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/installation" element={<Installation />} />

          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App

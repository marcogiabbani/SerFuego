import React from 'react'
import {
  Route, Routes, HashRouter
} from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home'
import Contact from './components/Contact';
import Installation from './components/Installation';

function App() {

  return (

    <HashRouter>
      <div className='h-screen flex flex-col justify-between'>
        {/* <div className=''>
          <NavBar />
        </div> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* include a button to return to home in the contact */}

            <Route exact path="/installation" element={<Installation />} />
            {/* include a button to return to home in the Installation */}

          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App

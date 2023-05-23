import React from 'react'
import {
  Route, Routes, HashRouter
} from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import Installation from './components/Installation';
import MobileNavBar from './components/MobileNavBar';
import MobileHome from './components/MobileHome';

function App() {
  const isMobile = window.innerWidth < 768; // Define the mobile breakpoint
  return isMobile
    ? (
      <HashRouter>

        <div className='h-[99vh] flex flex-col'>
          <div>
            <MobileNavBar />
          </div>
          <div>
            <Routes>
              <Route exact path="/" element={<MobileHome />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/installation" element={<Installation />} />

            </Routes>
          </div>
        </div>
      </HashRouter>
    )
    : (

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

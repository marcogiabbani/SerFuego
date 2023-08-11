import React from 'react'
import {
    Route, Routes, HashRouter
} from 'react-router-dom';

import Home from './components/Home';
import MobileNavBar from './components/MobileNavBar';
import MobileContact from './components/MobileContact';
import MobileInstallation from './components/MobileInstallation';
import MobileAbout from './components/MobileAbout';
import About from './components/About';

function App() {
    const isMobile = window.innerWidth < 1060; // Define the mobile breakpoint
    return (
            <HashRouter>

                <div className='h-[99vh] flex flex-col justify-between'>
                    <div>
                        <MobileNavBar />
                    </div>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/contact" element={<MobileContact fullFooter={true} />} />
                            <Route exact path="/installation" element={<MobileInstallation fullFooter={isMobile ? false : true} />} />
                            <Route exact path="/about" element={<MobileAbout fullFooter={false} />} />
                            <Route exact path="/tipo" element={<About />} />

                        </Routes>
                    </div>
                </div>
            </HashRouter>)
}

export default App

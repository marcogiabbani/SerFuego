import React from 'react'
import {
    Route, Routes, HashRouter
} from 'react-router-dom';
import Home from './components/Home'
import MobileNavBar from './components/MobileNavBar';
import MobileHome from './components/MobileHome';
import MobileContact from './components/MobileContact';
import MobileInstallation from './components/MobileInstallation';
import MobileAbout from './components/MobileAbout';

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
                            <Route exact path="/" element={isMobile ? <MobileHome /> : <Home />} />
                            <Route exact path="/contact" element={<MobileContact fullFooter={true} />} />
                            <Route exact path="/installation" element={<MobileInstallation fullFooter={isMobile ? false : true} />} />
                            <Route exact path="/about" element={<MobileAbout fullFooter={false} />} />

                        </Routes>
                    </div>
                </div>
            </HashRouter>)
}

export default App

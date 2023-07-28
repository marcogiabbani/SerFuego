import React from 'react'
import {
    Route, Routes, HashRouter
} from 'react-router-dom';
import Home from './components/Home'
import MobileNavBar from './components/MobileNavBar';
import MobileHome from './components/MobileHome';
import MobileContact from './components/MobileContact';
import MobileInstallation from './components/MobileInstallation';
import Installation from './components/Installation';

function App() {
    const isMobile = window.innerWidth < 1060; // Define the mobile breakpoint
    return isMobile
        ? (
            <HashRouter>

                <div className='h-[99vh] flex flex-col justify-between'>
                    <div>
                        <MobileNavBar />
                    </div>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<MobileHome />} />
                            <Route exact path="/contact" element={<MobileContact fullFooter={true} />} />
                            <Route exact path="/installation" element={<MobileInstallation fullFooter={isMobile ? false : true} />} />

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
                            <Route exact path="/contact" element={<MobileContact fullFooter={true} />} />
                            <Route exact path="/installation" element={<MobileInstallation fullFooter={isMobile ? false : true} />} />
                            <Route exact path="/installation3" element={<Installation />} />

                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
}

export default App

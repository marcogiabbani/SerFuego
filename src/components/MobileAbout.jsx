import React from 'react'
import MobileFooter from './MobileFooter'
import Home from './Home'

// eslint-disable-next-line react/prop-types
function MobileAbout({ fullFooter }) {
    return (
        <div>
        <div className='h-[85vh] xl:hidden xl:h-0'>
            <div className='h-full flex flex-col justify-between xl:px-16'>

                <div className='h-full flex flex-col justify-between px-3 xl:pl-48 xl:pt-32'>
                    <div className='text-xl sm:text-4xl xl:text-6xl'>
                        <p>The phenomenon of combustion manifested in light, flame and heat. Serfuego, a Design studio based in Argentina. The perception as a communication device and distancing of the trith to be communicable again.
                        </p>
                    </div>
                    <div className='text-xl sm:text-4xl flex flex-col'>
                        <span className=''>Focus</span>
                        <span className=''>Visual Identity</span>
                        <span className=''>Naming</span>
                        <span className=''>Editorial Design</span>
                        <span className=''>Web Design</span>
                        <span className=''>Museography</span>
                        <span className=''>Illustration</span>
                        <span className=''>Installations</span>
                        <span className=''>Broadcast graphic material</span>
                        <span className=''>Animation</span>
                        <span className=''>Audiovisual productions</span>
                        <span className=''>3D.</span>
                    </div>

                    {!fullFooter &&
                        <div className='text-2xl sm:text-4xl'>
                            <p>
                                -
                            </p>
                            <p>
                                2016 - 2023.
                            </p>
                        </div>
                    }
                </div>
                <div className=''>
                    <MobileFooter fullFooter={fullFooter} />
                    {/* 
                        Aca ahcer un logo que luego de 1080 0 1920 no se muestre y se muestra el footer
                    */}
                </div>
            </div>
        </div>
        <div className='hidden xl:block'>
                    <Home />
        </div>
        </div>
    )
}

export default MobileAbout
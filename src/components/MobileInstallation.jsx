import React from 'react'
import { Link } from 'react-router-dom'
import MobileFooter from './MobileFooter'

// eslint-disable-next-line react/prop-types
function MobileInstallation({ fullFooter }) {
    return (
        <div className='h-[85vh]  xl:h-screen'>
            <div className='h-full flex flex-col justify-between xl:px-16'>

                <div className='hidden xl:block'>
                    <Link to='/'>
                        <div className='flex justify-between h-[15vh] mt-10 px-7'>
                            <h1 className='text-[70px]'>Serfuego_</h1>
                            <span></span>
                        </div>
                    </Link>
                </div>

                <div className='h-full flex flex-col justify-evenly px-3  xl:pl-48 xl:pt-32'>
                    <div className='text-3xl sm:text-5xl xl:text-6xl'>
                        <p>
                            Visual project that develops between 2016 and 2023.
                        </p>
                    </div>
                    <div className='text-3xl sm:text-5xl xl:text-6xl'>
                        <p>
                            Serfuego© is the combination of an Artistic branding and the new look
                            at the Culture design. It ranges from astrology to the most luxurious
                            objects of
                            worship.
                        </p>
                    </div>
                    <div className='text-3xl sm:text-5xl xl:text-6xl'>
                        <p>
                            The identity of a period of time of a remoto Studio
                            producing pieces of <span className='underline'> Art & Design</span>
                        </p>
                    </div>
                    {!fullFooter &&
                        <div className='text-3xl sm:text-5xl'>
                            <p>
                                -
                            </p>
                            <p>
                                2016 - 2023.
                            </p>
                        </div>
                    }

                    <div className='hidden xl:flex h-32 flex-col justify-evenly'>

                        <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="64.5" y2="0" stroke="black" strokeWidth="0.1" />
                        </svg>
                        <span className='h- text-[30px] align-baseline'> The phenomenon of combustion manifested in light, flame and heat.</span>

                    </div>

                </div>
                <div className='md:mt-5 xl:hidden'>
                    <MobileFooter fullFooter={false} />
                </div>
                <div className='hidden xl:block'>
                    <MobileFooter fullFooter={true} />
                </div>
            </div>
        </div>

    )
}

export default MobileInstallation
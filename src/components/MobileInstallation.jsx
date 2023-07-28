import React from 'react'
import { Link } from 'react-router-dom'
import MobileFooter from './MobileFooter'

// eslint-disable-next-line react/prop-types
function MobileInstallation({ fullFooter }) {
    return (
        <div>
            <div className='invisible md:visible '>
                <Link to='/'>

                    <div className='flex justify-between h-[15vh] mt-10 px-7'>
                        <h1 className='text-[70px]'>Serfuego_</h1>
                        <span></span>
                    </div>
                </Link>
            </div>

            <div className=''>
                <div>
                    <p>
                        Visual project that develops between 2016 and 2023.
                    </p>
                </div>
                <div>
                    <p>
                        Serfuego© is the combination of an Artistic branding and the new look
                        at the Culture design. It ranges from astrology to the most luxurious
                        objects of
                        worship.
                    </p>
                </div>
                <div>
                    <p>
                        The identity of a period of time of a remoto Studio
                        producing pieces of <span className='underline'> Art & Design</span>
                    </p>
                </div>

            </div>
            <MobileFooter fullFooter={fullFooter} />

        </div>

    )
}

export default MobileInstallation
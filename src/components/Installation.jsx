import React from 'react'
import { Link } from 'react-router-dom';
import MobileFooter from './MobileFooter';

// eslint-disable-next-line react/prop-types
export default function Installation({ fullFooter }) {
    return (
        <div className=' h-screen px-16 flex flex-col justify-between'>
            <Link to='/'>

                <div className='flex justify-between h-[15vh] mt-10 px-7'>
                    <h1 className='text-[70px]'>Serfuego_</h1>
                    <span></span>
                </div>

            </Link>

            <div className='flex flex-col text-[#251F20] text-9xl pl-48 pt-32 text'>

                <div className='pr-32'>
                    <p className=' text-[60px]'>
                        Visual project that develops between 2016 and 2023.
                    </p>
                    <p className=' text-[60px]'>
                        Serfuego© is the combination of an Artistic branding and the new look
                        at the Culture design. It ranges from astrology to the most luxurious
                        objects of
                        worship.
                    </p>
                    <p className=' text-[60px]'>
                        The identity of a period of time of a remoto Studio
                        producing pieces of <span className='underline'> Art & Design</span>
                    </p>
                </div>

                <div className='h-32 flex flex-col justify-evenly'>

                    <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="64.5" y2="0" stroke="black" strokeWidth="0.1" />
                    </svg>
                    <span className='h- text-[30px] align-baseline'> The phenomenon of combustion manifested in light, flame and heat.</span>

                </div>

            </div>
            <MobileFooter fullFooter={fullFooter}/>
        </div>
    )
}

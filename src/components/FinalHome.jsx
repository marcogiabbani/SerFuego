import React from 'react'
import MobileHome from './MobileHome'
import Home from './Home'

const FinalHome = () => {
    return (
        <div className='h-screen '>
            <div className='visible md:hidden'>
                <MobileHome />
            </div>
            <div className='hidden  md:block'>
                <Home />

            </div>
        </div>
    )
}

export default FinalHome
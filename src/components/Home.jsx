import React from 'react'
import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'

const FinalHome = () => {
    return (
        <div className='h-screen '>
            <div className='visible md:hidden'>
                <MobileHome />
            </div>
            <div className='hidden  md:block'>
                <DesktopHome />

            </div>
        </div>
    )
}

export default FinalHome
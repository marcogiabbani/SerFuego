import React from 'react'
import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'

const FinalHome = () => {
    return (
        <div className='h-screen '>
            <div className='visible xl:hidden'>
                <MobileHome />
            </div>
            <div className='hidden  xl:block'>
                <DesktopHome />

            </div>
        </div>
    )
}

export default FinalHome
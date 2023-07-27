import React from 'react'
import MobileFooter from './MobileFooter'

function MobileContact() {
    return (
        <div className='bg-[#FF0000] h-[85vh]
            md:bg-black md:h-screen md:text-[#FF0000]'>

            <div className='h-full mt-0 flex flex-col justify-between
                md:h-screen'>

                <div className='h-full flex flex-col text-4xl m-auto
                    md:text-9xl md:px-24 md:pt-16'>
                    <span className='pb-3 
                        md:pb-0 md:max-h-[110px] md:text-[150px]'>Francisco Matte</span>
                    <span className='pb-3
                        md:pb-0 md:max-h-[110px] md:text-[150px]'>Design & ArtDirection</span>
                    <span className='pb-3
                        md:pb-0 md:max-h-[110px] md:text-[150px]'>(+54) 11 3420 0305</span>
                    <span className='pb-3
                        md:pb-0 md:max-h-[110px] md:text-[150px]'>fuego@serfuego.com</span>
                    <span className='pb-3
                        md:pb-0 md:max-h-[110px] md:text-[150px]'>@serfuego</span>
                    <span className='pb-3
                        md:pb-0 md:max-h-[110px] md:text-[150px]'>born in Barcelona_</span>
                </div>

                <div className='h-full max-h-[60px] flex flex-col justify-between
                    md:px-24 md:max-h-full'>
                        
                    <div className='text-center h-full md:invisible'>
                        <span className=''>
                            The phenomenon of combustion manifested in light, flame and heat.
                        </span>
                    </div>

                    <div className='invisible md:visible h-full '>

                        <span className='h-[110px] text-[40px] align-baseline'> The phenomenon of combustion manifested in light, flame and heat.</span>
                        <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100" y2="0" stroke="red" strokeWidth="0.1" />
                        </svg>
                    </div>


                </div>
                <div className='md:px-16'>
                    <MobileFooter />
                </div>

            </div>

        </div>
    )
}

export default MobileContact
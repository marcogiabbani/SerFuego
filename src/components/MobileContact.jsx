import React from 'react'
import MobileFooter from './MobileFooter'

// eslint-disable-next-line react/prop-types
function MobileContact({ fullFooter }) {
    return (
        <div className='bg-[#FF0000] h-[85vh]
            xl:bg-black xl:h-screen xl:text-[#FF0000]'>

            <div className='h-full mt-0 flex flex-col justify-between
                xl:h-screen'>

                <div className='h-full flex flex-col text-4xl sm:text-6xl m-auto
                    xl:text-9xl xl:px-24 xl:pt-16'>
                    <span className='pb-1 
                        xl:pb-0 xl:max-h-[110px] xl:text-[150px]'>Francisco Matte</span>
                    <span className='pb-2
                        xl:pb-0 xl:max-h-[110px] xl:text-[150px]'>Design & ArtDirection</span>
                    <span className='pb-1
                        xl:pb-0 xl:max-h-[110px] xl:text-[150px]'>(+54) 11 3420 0305</span>
                    <span className='pb-1
                        xl:pb-0 xl:max-h-[110px] xl:text-[150px]'>fuego@serfuego.com</span>
                    <span className='pb-1
                        xl:pb-0 xl:max-h-[110px] xl:text-[150px]'>@serfuego</span>
                    <span className='pb-1
                        xl:pb-0 xl:max-h-[110px] xl:text-[150px]'>born in Barcelona_</span>
                </div>

                <div className='h-full max-h-[60px] flex flex-col justify-between
                    xl:px-24 xl:max-h-full'>
                        
                    <div className='text-center h-full text-sm sm:text-base xl:invisible'>
                        <span className=''>
                            The phenomenon of combustion manifested in light, flame and heat.
                        </span>
                    </div>

                    <div className='invisible xl:visible h-full '>

                        <span className='h-[110px] text-[40px] align-baseline'> The phenomenon of combustion manifested in light, flame and heat.</span>
                        <svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100" y2="0" stroke="red" strokeWidth="0.1" />
                        </svg>
                    </div>

                </div>
                <div className='xl:px-16'>
                    <MobileFooter fullFooter={fullFooter}/>
                    {/* 
                        Unico componente mobil donde se muestra el footer y vertical
                    */}
                </div>

            </div>

        </div>
    )
}

export default MobileContact
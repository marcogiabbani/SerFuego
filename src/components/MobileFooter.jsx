import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line object-curly-spacing, react/prop-types
function MobileFooter({ fullFooter }) {
    return (
        <div>
            {fullFooter ?
                <div className='flex flex-col justify-between text-xl 
            xl:text-[30px]'>

                    <div className='flex flex-col justify-between text-center
                xl:flex-row xl:text-left'>

                        <div className='w-40 h-full m-auto flex flex-col justify-between 
                            xl:h-auto xl:m-0 xl:flex-row text-sm xl:text-2xl'>
                            <div className='pb-5 xl:p-0'>
                                <Link to='https://franciscoluismatte.com/' target="_blank">
                                    <span >  F  </span>
                                </Link>
                            </div>
                            <div className='pb-5 xl:p-0'>
                                <Link to='https://www.instagram.com/barthes.vhs/' target="_blank">
                                    <span>  I  </span>
                                </Link>
                            </div>
                            <div className='pb-5 xl:p-0'>
                                <Link to='https://www.behance.net/franmatte' target="_blank">
                                    <span>  B  </span>
                                </Link>
                            </div>
                            <div className='pb-5 xl:p-0'>
                                <Link to='https://romantiv.com/' target="_blank">
                                    <span>  R  </span>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Link to='/'>
                                <div className='text-4xl py-4
                            xl:text-[30px] xl:p-0'>
                                    <span >SF ©</span>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
                :
                <div>
                    <Link to='/'>
                        <div className='text-4xl py-4 text-center
                            xl:text-[30px] xl:p-0'>
                            <span >SF ©</span>
                        </div>
                    </Link>

                </div>}
        </div>
    )
}

export default MobileFooter
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='flex flex-col justify-between  text-[30px]'>

            <div className='flex justify-between'>

                <div className='w-40 flex justify-between'>
                    <Link to='https://franciscoluismatte.com/' target="_blank">
                        <span>  F  </span>
                    </Link>
                    <Link to='https://www.instagram.com/barthes.vhs/' target="_blank">
                        <span>  I  </span>
                    </Link>
                    <Link to='https://www.behance.net/franmatte' target="_blank">
                        <span>  B  </span>
                    </Link>
                    <Link to='https://romantiv.com/' target="_blank">
                        <span>  R  </span>
                    </Link>

                </div>

                <Link to='/'>
                    <div>
                        <span >SF ©</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

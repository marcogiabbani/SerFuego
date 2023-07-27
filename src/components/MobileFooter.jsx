import React from 'react'
import { Link } from 'react-router-dom'

function MobileFooter() {
  return (
    <div className='flex flex-col justify-between text-2xl 
      md:text-[30px]'>

      <div className='flex flex-col justify-between text-center
        md:flex-row md:text-left'>

        <div className='w-40 h-full m-auto flex flex-col justify-between 
          md:h-auto md:m-0 md:flex-row'>
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
        <div>

          <Link to='/'>
            <div className='text-4xl pt-4
              md:text-[30px] md:p-0'>
              <span >SF ©</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default MobileFooter
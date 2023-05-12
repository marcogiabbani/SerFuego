import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='flex flex-col justify-between  text-[30px]'>

      <div className='flex justify-between'>

        <div className='w-40 flex justify-between'>
          <span>  F  </span>
          <span>  B  </span>
          <span>  I  </span>
          <span>  T  </span>
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

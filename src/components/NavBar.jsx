import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='flex flex-col w-1/5 justify-between text-xl'>
      <span className='text-left'>About</span>
      <Link to='/contact' className='text-center'>
        <span >Contact</span>
      </Link>
      <Link to='/installation' className='text-right'>
        <span >Installation</span>
      </Link>
    </div>
  )
}

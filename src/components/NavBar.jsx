import React from 'react'

export default function NavBar() {
  return (
    <div className='flex flex-col w-1/5 justify-between'>
      <span className='text-left'>About</span>
      <span className='text-center'>Contact</span>
      <span className='text-right'>Installation</span>
    </div>
  )
}

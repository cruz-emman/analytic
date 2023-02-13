import React from 'react'
import ImageLogo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-green-300 flex items-center justify-center shadow-lg'>
        <img src={ImageLogo} alt="" className='w-40 self-center' />
    </div>
  )
}

export default Navbar
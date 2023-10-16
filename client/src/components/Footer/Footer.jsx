import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer justify-between text-white flex items-center py-6 px-4 border-[1px] border-[#0D0C0C]' >
        <img src={logo} className='w-28' alt="" /> 
        <p className='text-sm'>2023 MoonHub. All rights reserved</p>
    </footer>
  )
}

export default Footer
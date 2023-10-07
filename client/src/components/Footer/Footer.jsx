import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer text-white p-10 px-24 flex items-center  border-[1px] border-[#0D0C0C]' >
        <img src={logo} className='w-36' alt="" /> 
        <p className='pl-[18rem]'>2023 MoonHub. All rights reserved</p>
    </footer>
  )
}

export default Footer
import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact text-white p-10 px-28 flex border-t border-[#0D0C0C]'>
      <div>
      <h2 className='font-semibold'>Connect with Us</h2>
        <p>Subscribe for weekly newsletter and stay updated on major <br /> developments on MoonHub</p>
      </div>

        <form  className='px-20 pt-4'>
            <input type="text" placeholder='john@gmail.com' className="bg-transparent border-[1px] px-2 pl-5 p-2 rounded-s-md" />
            <button className="bg-transparent border-[1px] p-2 rounded-e-md">Subscribe</button>
        </form>
    </div>
  )
}

export default Contact
import React from 'react'
import './Team.css'
import Obinna  from '../../assets/Obinna.png'
import Daniel  from '../../assets/Daniel.png'
import Samson  from '../../assets/Samson.png'
import Jude  from '../../assets/jude.png'
import Ire  from '../../assets/Ire.png'
import twitter from '../../assets/twitter.png'
const Team = () => {
  return (
    <div className='team text-white p-8 border-t border-[#0D0C0C]'>
        <h1 className='text-center text-[22px] font-semibold py-4'>Core Team</h1>
        <div className='flex items-center justify-between px-32 py-8'>
            <div className="flex items-center justify-center flex-col">
                <img src={Obinna} alt=""  className='pb-4 w-36' />
                <h1 className='pb-2'>Obinna Okolie</h1>
                <h2 className='pb-2'>Founder</h2>
                <img src={twitter} alt=""  />
            </div>
            <div className="flex items-center justify-center flex-col">
                <img src={Daniel} alt=""  className='pb-4 w-36' />
                <h1 className='pb-2'>Onyekachi Daniel</h1>
                <h2 className='pb-2'>Developer</h2>
                <img src={twitter} alt="" />
            </div>
            <div className="flex items-center justify-center flex-col">
                <img src={Samson} alt=""  className='pb-4 w-36'/>
                <h1   className='pb-2'>Samson Aderonmu</h1>
                <h2 className='pb-2'>Developer</h2>
                <img src={twitter} alt="" />
            </div>
        </div>
        <div className='flex items-center justify-between px-32 py-8'>
            <div className="flex items-center justify-center flex-col">
                <img src={Jude} alt=""  className='pb-4 w-36' />
                <h1 className='pb-2'>Jude Ndubuisi</h1>
                <h2 className='pb-2'>Developer</h2>
                <img src={twitter} alt=""  />
            </div>
            <div className="flex items-center justify-center flex-col">
                <img src={Jude} alt=""  className='pb-4 w-36' />
                <h1 className='pb-2'>Julius</h1>
                <h2 className='pb-2'>Developer</h2>
                <img src={twitter} alt="" />
            </div>
            <div className="flex items-center justify-center flex-col">
                <img src={Ire} alt=""  className='pb-4 w-36'/>
                <h1   className='pb-2'>Ire Oluwa</h1>
                <h2 className='pb-2'>Product Designer</h2>
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Team
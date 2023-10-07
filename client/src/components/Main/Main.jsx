import React from 'react'
import './main.css'
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import mainImg from '../../assets/mainImg.png'

const Main = () => {
  return (
    <div className='main text-white flex px-20'>
        
        <div className='px-20 py-20 w-1/2'>
            <h2 className="text-[20px] font-semibold pb-2">Tokenized Messaging</h2>
            <p className='text-[14px] pb-2'>Decentralized community messaging, empolying incentivized engagement, and secure sharing of information</p>
            <h2  className="text-[20px] font-semibold pb-2">Research Dashboard</h2>
            <p className='text-[14px]  pb-2'>Information and intel analytics, on-chain proof of progress tracking and transparency.</p>
            <h2  className="text-[20px] font-semibold pb-2">Voting and Proposals</h2>
            <p className='text-[14px]  pb-2'>Implementation of proposal for governance, enhanced voting privileges based on increased token ownership.</p>
            <h2  className="text-[20px] font-semibold pb-2">Fractional Ownership</h2>
            <p className='text-[14px] pb-2'>Utilizing functional distribution of tokens within the research DOA pool as a means to effectively manage and regulate risk threshold levels.</p>
            <h2  className="text-[20px] font-semibold pb-2">MoonHub Outlet</h2>
            <p className='text-[14px]  pb-2'>Users can explore, discover, and spend Moonhub tokens to acquire offerings within the MoonHub ecosystem.</p>
            <h2  className="text-[20px] font-semibold pb-2">Web3 Education and Onboarding</h2>
            <p className='text-[14px] pb-2'>Enable newcomers embark on their web3 journey with ease, andprovide refresher courses for existing users.</p>

            <button className='bg-[#2B0E23] rounded-3xl p-2 px-10 mt-8'>Explore <NavigateNextOutlinedIcon/></button>
        </div>

        <div className='w-1/2 py-8'>
            <img src={mainImg} className='w-[32rem] pl-12 py-20 ' alt="" />
        </div>
    </div>
  )
}

export default Main
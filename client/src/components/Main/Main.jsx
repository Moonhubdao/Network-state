import React from "react";

import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import mainImg from "../../assets/mainImg.png";

const Main = () => {
  return (
    <div className="main flex-col text-white flex  pb-12">
      <div className="flex flex-col lg:flex-row lg:gap-40">
      <div className="flex flex-col px-5 text-sm py-20 gap-9 lg:gap-2 lg:w-6/12">
        <h2 className="text-[20px] font-semibold  ">Tokenized Messaging</h2>
        <p className="text-[14px] pb-12 lg:text-xl text-gray-300 ">
          Decentralized community messaging, empolying incentivized engagement,
          and secure sharing of information
        </p>
        <h2 className="text-[20px] font-semibold  ">Research Dashboard</h2>
        <p className="text-[14px]  pb-12 lg:text-xl text-gray-300 ">
          Information and intel analytics, on-chain proof of progress tracking
          and transparency.
        </p>
        <h2 className="text-[20px] font-semibold ">Voting and Proposals</h2>
        <p className="text-[14px]  pb-12 lg:text-xl text-gray-300 ">
          Implementation of proposal for governance, enhanced voting privileges
          based on increased token ownership.
        </p>
        <h2 className="text-[20px] font-semibold ">Fractional Ownership</h2>
        <p className="text-[14px] pb-12 lg:text-xl text-gray-300 ">
          Utilizing functional distribution of tokens within the research DOA
          pool as a means to effectively manage and regulate risk threshold
          levels.
        </p>
        <h2 className="text-[20px] font-semibold ">MoonHub Outlet</h2>
        <p className="text-[14px]  pb-12 lg:text-xl text-gray-300 ">
          Users can explore, discover, and spend Moonhub tokens to acquire
          offerings within the MoonHub ecosystem.
        </p>
        <h2 className="text-[20px] font-semibold ">
          Web3 Education and Onboarding
        </h2>
        <p className="text-[14px] pb-12 lg:text-xl text-gray-300 ">
          Enable newcomers embark on their web3 journey with ease, andprovide
          refresher courses for existing users.
        </p>
      </div>

      <div className="flex items-center justify-center lg:justify-start lg:items-start lg:mt-32 ">
        <img src={mainImg} className="w-80 lg:w-10/12" alt="altImg"/>
      </div>
      </div>
   
    </div>
  );
};

export default Main;

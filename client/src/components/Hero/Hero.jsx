import React from "react";

import message from "../../assets/message.png";
import heroIcon1 from "../../assets/heroIcon1.png";
import heroIcon2 from "../../assets/heroIcon2.png";
import heroIcon3 from "../../assets/heroIcon3.png";
import heroIcon7 from "../../assets/heroIcon7.png";

const Hero = () => {
  return (
    <div className="flex flex-col " id="heroBody">
      <div className="flex items-center gap-4 justify-center text-white flex-col p-20 mt-24">
        <div>
          <img src={message} className="w-36" alt="message" />
        </div>
        <h1 className="font-black text-3xl">MoonHub</h1>
        <p className="flex w-full text-gray-300 justify-center items-center text-sm lg:text-2xl">
          All-in-one group messaging chats, for the network state.
        </p>
      </div>

      <div className="flex gap-8 items-center justify-center mb-10">
        <img src={heroIcon1} className="w-12" alt="" />
        <img src={heroIcon2} className="w-12" alt="" />
        <img src={heroIcon3} className="w-12" alt="" />
        <img src={heroIcon7} className="w-12 " alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import message from "../../assets/message.png";
import heroIcon1 from "../../assets/heroIcon1.png";
import heroIcon2 from "../../assets/heroIcon2.png";
import heroIcon3 from "../../assets/heroIcon3.png";
import heroIcon7 from "../../assets/heroIcon7.png";
import heroIcon4 from "../../assets/heroIcon4.png";
import heroIcon5 from "../../assets/heroIcon5.png";
import heroIcon6 from "../../assets/heroIcon6.png";

const Hero = () => {
  return (
    <div className="pt-36" id="heroBody">
      <div className="flex items-center justify-center text-white flex-col p-40 ">
        <h1 className="semi-bold text-3xl">MoonHub</h1>
        <p>All-in-one group messaging chats, for the network state.</p>
      </div>
      <div className="">
        <img
          src={message}
          className="w-36 absolute top-[230px] left-[680px]"
          alt=""
        />

        <img
          src={heroIcon1}
          className="w-12  absolute top-[120px] left-[342px]"
          alt=""
        />
        <img
          src={heroIcon2}
          className="w-12  absolute top-[280px] left-[230px]"
          alt=""
        />
        <img
          src={heroIcon3}
          className="w-12  absolute top-[430px] left-[350px]"
          alt=""
        />
        <img
          src={heroIcon7}
          className="w-12  absolute top-[560px] left-[640px]"
          alt=""
        />
        <img
          src={heroIcon4}
          className="w-12  absolute top-[430px] left-[970px]"
          alt=""
        />
        <img
          src={heroIcon5}
          className="w-12  absolute top-[280px] left-[1070px]"
          alt=""
        />
         <img
          src={heroIcon6}
          className="w-12  absolute top-[120px] left-[1092px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

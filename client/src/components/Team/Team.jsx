import React from "react";

import Obinna from "../../assets/Obinna.png";
import Daniel from "../../assets/Daniel.png";
import Samson from "../../assets/Samson.png";
import Jude from "../../assets/jude.png";
import Ire from "../../assets/Ire.png";

const Team = () => {
  return (
    <div className="team text-white p-6 border-t border-[#0D0C0C] px-20">
      <h1 className="text-center text-[22px] font-semibold py-4">Core Team</h1>
      <div className="flex gap-12 items-center justify-between py-8">
        <div className="flex items-center justify-center text-center flex-col">
          <img src={Obinna} alt="" className="pb-4 w-16 lg:w-32 " />
          <h1 className="pb-2 text-sm lg:text-xl">Obinna Okolie</h1>
          <h2 className="pb-2 text-sm lg:text-xl">Founder</h2>
        </div>
        <div className="flex items-center justify-center text-center flex-col">
          <img src={Daniel} alt="" className="pb-4 w-16 lg:w-32" />
          <h1 className="pb-2 text-sm lg:text-xl">Onyekachi Daniel</h1>
          <h2 className="pb-2 text-sm lg:text-xl">Developer</h2>
        </div>
        <div className="flex items-center justify-center text-center flex-col">
          <img src={Samson} alt="" className="pb-4 w-16 lg:w-32" />
          <h1 className="pb-2 text-sm lg:text-xl">Samson Aderonmu</h1>
          <h2 className="pb-2 text-sm lg:text-xl">Developer</h2>
        </div>
      </div>
      <div className="flex gap-12 items-center justify-between py-8">
        <div className="flex items-center justify-center text-center flex-col">
          <img src={Jude} alt="" className="pb-4 w-16 lg:w-32" />
          <h1 className="pb-2 text-sm lg:text-xl">Jude Ndubuisi</h1>
          <h2 className="pb-2 text-sm lg:text-xl">Developer</h2>
        </div>
        <div className="flex items-center justify-center text-center flex-col">
          <img src={Jude} alt="" className="pb-4 w-16 lg:w-32" />
          <h1 className="pb-2 text-sm lg:text-xl">Julius</h1>
          <h2 className="pb-2 text-sm lg:text-xl">Developer</h2>
        </div>
        <div className="flex items-center justify-center text-center flex-col">
          <img src={Ire} alt="" className="pb-4 w-16 lg:w-32 " />
          <h1 className="pb-2 text-sm lg:text-xl">Ire Oluwa</h1>
          <h2 className="pb-2 text-sm lg:text-xl">Product Designer</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;

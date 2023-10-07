import React from "react";
import logo from "../../assets/logo.png";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

import "./NavBar.css";

export const NavBar = ({login}) => {



  return (
    <div className="fixed w-full z-10  navBar">
      <nav className=" flex items-center justify-between px-40 p-5">
        <img src={logo} alt="" />

        <button  onClick={login} 
        className="text-white border-[1px] border-white px-3 py-2 rounded-3xl hover:bg-[#B0186A] hover:border-0">
          Sign IN <NavigateNextOutlinedIcon />
        </button>
      </nav>
    </div>
  );
};

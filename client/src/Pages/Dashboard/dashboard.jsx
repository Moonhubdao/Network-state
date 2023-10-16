import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import frameImage from "../../assets/Frame2.jpg";
import profileImage from "../../assets/Frame 201.svg";
import logo from "../../assets/logo.png";
// import Chats from "../ChatApp/Chat";

const Dashboard = ({ user, logout }) => {
  const [uploadedImage, setUploadedImage] = useState(profileImage);
  const [uploadedFlier, setUploadedFlier] = useState(frameImage);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFrameUpload = (event) => {
    const flier = event.target.files[0];
    if (flier) {
      const readFlier = new FileReader();
      readFlier.onloadend = () => {
        setUploadedFlier(readFlier.result);
      };
      readFlier.readAsDataURL(flier);
    }
  };

  console.log(user);
  return (
    <div className=" px-3 navBar">
      <div className="z-10 navBar">
        <div className="flex items-center justify-between py-3 md:px-12 gap-2 ">
          <Link to='/'>
            <img src={logo} alt="Logo" className="w-20 md:w-40" />
          </Link>

          <div className="flex gap-2 md:ml-4 md:gap-12">
            <Link
              to="/video"
              className="text-white bg-[#2C0E23] hover:bg-[#B0186A] hover:border-0 px-6 py-2 rounded-lg text-xs"
            >
              Calls
            </Link>
            <Link
              to="/chatroom"
              className="text-white bg-[#2C0E23] hover:bg-[#B0186A] hover:border-0 px-6 py-2 rounded-lg text-xs"
            >
              Chat
            </Link>
            <Link to='/points' className="text-white bg-[#2C0E23] hover:bg-[#B0186A] hover:border-0 px-6 py-2 rounded-lg text-xs">
              Rewards
            </Link>
          </div>

          <div>
            <button
              onClick={logout}
              className="flex items-center justify-center font-black text-white bg-[#2C0E23] px-2 py-1 rounded-lg hover:bg-[#B0186A] hover:border-0"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col pl-2" id="heroBody">
        <div className="mt-6">
          <h1 className="text-white text-xl">
            Hello 👋
            {user && user.username}
          </h1>
        </div>

        <div className="relative mt-4">
          <img
            src={uploadedFlier}
            alt=""
            className="flex bg-auto p-6  rounded-3xl w-6/12 h-40"
          />
          <div className="rounded-full overflow-hidden">
            <input
              type="file"
              onChange={handleFrameUpload}
              accept="image/*"
              className=" border absolute top-4 border-white rounded-3xl cursor-pointer  w-full h-32  opacity-0 bg-contain "
            />
          </div>

          <img
            src={uploadedImage}
            alt=""
            className="absolute  p-6 rounded-full transform -translate-x-2/4 -translate-y-2/4 z-10 top-32 w-28 left-20 bg-contain "
          />
          <div className="rounded-full overflow-hidden">
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="absolute border border-white rounded-full top-24 left-8 cursor-pointer w-24 h-24  opacity-0 z-10 bg-contain"
            />
          </div>
        </div>

        <div className="ml-4 mt-4">
          <h2 className="text-white font-semibold text-xl">
            {user && user.username}
          </h2>
          <p className="text-gray-500 text-xs">@{user && user.username}</p>
        </div>

        <div className="ml-4 mt-20 flex flex-col gap-4">
          <h2 className="text-gray-500">Communities</h2>
          <p className="text-white text-sm">
            Communities you are part of will show here
          </p>
        </div>

        <div className="my-10 flex gap-3">
          <div className="text-white border border-gray-600 rounded-lg w-28 p-4">
            Moon Dao
          </div>
          <div className="text-white border border-gray-600 rounded-lg w-28 p-4">
            Star Dao
          </div>
          <div className="text-white border border-gray-600 rounded-lg w-28 p-4">
            Boomers
          </div>
          <div className="text-white border border-gray-600 rounded-lg w-28 p-4">
            Atlas
          </div>
        </div>

        <div className=" flex justify-between border  border-gray-600 rounded-lg  my-6 p-6 w-96">
          <button className="text-white bg-slate-600/60 p-3 rounded-lg font-black ">
            Create Community
          </button>
          <button className="text-white font-black ">Join Community</button>
        </div>
      </div>

      <div>
        <h2 className="text-gray-500 flex text-lg"> Stats </h2>
        <div className="flex justify-center items-center text-white border border-gray-600 rounded-lg w-40 p-4 ml-28">
          Users Joined: 5000 members
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

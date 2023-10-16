import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact text-white px-5 flex flex-col lg:flex-row lg:justify-between lg:gap-12 border-t border-[#0D0C0C] pb-12  ">
      <div className="flex flex-col gap-6 my-6  lg items-center justify-betwwen">
        <h2 className="font-semibold Lg:text-xl">Connect with Us</h2>
        <p className="flex w-full text-center  lg:text-xl">
          Subscribe for weekly newsletter and stay updated on major developments
          on MoonHub
        </p>
      </div>

      <form className="flex flex-col items-center justify-center  gap-4 lg:flex-row lg:w-10/12">
        <input
          type="text"
          placeholder="john@gmail.com"
          className="flex bg-transparent border px-2 w-10/12  pl-5 p-2 rounded-xl lg:items-center lg:justify-center"
        />
        <button className="bg-transparent border-[1px] border-gray-700 p-2 sm:rounded-e-md w-26 rounded-lg hover:bg-gray-700 items-center justify-center  ">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Contact;

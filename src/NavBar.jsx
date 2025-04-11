import React, { useState } from "react";
import { FaShopify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";

const NavBar = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  const [Modal, SetModal] = useState(false);

  return (
    <div className="flex flex-wrap justify-between px-2 bg-emerald-300">
      <div className="flex flex-row transition-all duration-300">
        <FaShopify className="m-1 shadow-lg text-green-800 text-2xl hover:text-green-900" />
        <span className="text-2xl font-display font-bold text-green-800 tracking-wide">
          Shwoop
        </span>
      </div>
      <div className="flex flex-row">
        <div className="relative m-1 transition-all duration-300">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-2 border border-green-600 rounded-xl outline-none placeholder:text-green-600 text-black"
          />
          <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 text-xl cursor-pointer" />
        </div>
        <RiShoppingCartFill
          onClick={() => SetModal(true)}
          className="text-2xl m-1 text-green-800 hover:text-green-900 cursor-pointer"
        />
        <button onClick={handleClick}>
          <div className="w-10 h-6 rounded-xl cursor-pointer bg-gray-400 flex items-center">
            <div
              className={`${
                darkMode ? "translate-x-full" : ""
              } m-1 transition-all duration-300 w-4 h-4 rounded-full bg-white`}
            ></div>
          </div>
        </button>
        {Modal && (
          <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div
              className={`${
                darkMode ? "bg-gray-500" : "bg-gray-300 text-black"
              } w-1/3 flex flex-col rounded-xl px-5 py-2`}
            >
              <div className="flex justify-between">
                <p className="text-2xl font-sans m-1">Enter Details</p>
                <button
                  onClick={() => SetModal(false)}
                  className="pr-2 text-2xl cursor-pointer"
                >
                  X
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter Name"
                className="outline-none rounded-xl pl-2  p-2 my-2"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="outline-none rounded-xl pl-2  p-2 my-2"
              />
              <input
                type="text"
                placeholder="Enter Address"
                className="outline-none rounded-xl pl-2 p-2 my-2"
              />
              <button
                type="submit"
                onClick={() => SetModal(false)}
                className="cursor-pointer rounded-xl m-2 p-2 bg-gray-400  hover:bg-gray-600 hover:text-white transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

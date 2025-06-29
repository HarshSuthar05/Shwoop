import React, { useState } from "react";
import { FaShopify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";

const NavBar = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };
  const [Modal, SetModal] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-700 text-white" : "bg-emerald-300 text-black"
      } flex flex-wrap justify-between px-4 py-2 transition-colors duration-500 items-center`}
    >
      <div className="flex items-center gap-2">
        <FaShopify className="text-2xl hover:text-green-600" />
        <span className="text-2xl font-display font-bold tracking-wide">
          Shwoop
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-2 pr-8 py-1 border border-green-600 rounded-xl outline-none placeholder:text-green-600 text-black"
          />
          <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 text-xl cursor-pointer" />
        </div>
        <RiShoppingCartFill
          onClick={() => SetModal(true)}
          className="text-2xl hover:text-green-900 cursor-pointer"
        />
        <button onClick={handleClick} className="relative">
          <div className="w-10 h-6 rounded-xl cursor-pointer bg-gray-400 flex items-center">
            <div
              className={`${
                darkMode ? "translate-x-full" : "translate-x-0"
              } m-1 transition-transform duration-300 w-4 h-4 rounded-full bg-white`}
            ></div>
          </div>
        </button>
      </div>
      {Modal && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className={`${
              darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
            } w-full max-w-md flex flex-col rounded-xl px-6 py-4`}
          >
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Enter Details</p>
              <button
                onClick={() => SetModal(false)}
                className="text-xl font-bold cursor-pointer"
              >
                X
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter Name"
              className="outline-none rounded-xl pl-2 p-2 my-2"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="outline-none rounded-xl pl-2 p-2 my-2"
            />
            <input
              type="text"
              placeholder="Enter Address"
              className="outline-none rounded-xl pl-2 p-2 my-2"
            />
            <button
              type="submit"
              onClick={() => SetModal(false)}
              className="cursor-pointer rounded-xl mt-2 p-2 bg-gray-400 hover:bg-gray-600 hover:text-white transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

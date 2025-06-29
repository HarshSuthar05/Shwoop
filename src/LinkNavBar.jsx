import React from "react";

const LinkNavBar = ({ darkMode }) => {
  console.log(darkMode);
  return (
    <div
      className={`flex justify-center ${
        darkMode ? "bg-gray-700 text-white" : "bg-green-100 text-black"
      } shadow-md font-medium py-2 px-4 transition-colors duration-500`}
    >
      <div className="flex flex-wrap justify-between items-center gap-4 w-full max-w-screen-xl mx-auto px-4 md:px-24">
        <h4 className="cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-600">
          Home
        </h4>
        <h4 className="cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-600">
          Top Rated
        </h4>
        <h4 className="cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-600">
          Kids Wear
        </h4>
        <h4 className="cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-600">
          Mens Wear
        </h4>
        <h4 className="cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:text-green-600">
          Womens Wear
        </h4>
        <select
          id="select"
          className="cursor-pointer bg-inherit transition-all duration-300 ease-out hover:scale-105 hover:text-green-600 outline-none"
        >
          <option defaultValue>Trending Items</option>
          <option value="clothes">Clothes</option>
          <option value="mobiles">Shirts</option>
          <option value="accessories">Innerwears</option>
          <option value="home appliances">Footwears</option>
        </select>
      </div>
    </div>
  );
};

export default LinkNavBar;

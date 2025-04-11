import React from "react";

const LinkNavBar = () => {
  return (
    <div className="flex justify-center bg-green-100 text-black shadow-md font-sans font-medium py-2 px-4">
      <div className="flex flex-wrap justify-between gap-4 w-full md:px-24">
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
          className="cursor-pointer bg-green-100 transition-all duration-300 ease-out hover:scale-105 hover:text-green-600 outline-none"
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

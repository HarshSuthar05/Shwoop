import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Footer = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? "bg-gray-700" : "bg-lime-200"} py-6 px-4`}>
      <div className="w-full flex flex-col gap-8 font-sans">
        <div className="w-full flex flex-col md:flex-row justify-around gap-6 md:gap-0 text-center md:text-left">
          <div className="max-w-[300px] mx-auto md:mx-0">
            <h1 className="font-bold text-2xl tracking-wider">Shwoop</h1>
            <p className="font-light py-2">
              Shwoop — where you come for just one t-shirt and leave with 6
              shirts, 3 hoodies, a jacket, and no idea how it happened. We
              totally get you.
            </p>
          </div>

          <div className="justify-center">
            <h3 className="text-2xl mb-3">Important Links</h3>
            <div className="flex flex-col gap-1 text-lg font-light">
              <a href="#offers" className="cursor-pointer">
                Offers
              </a>
              <a href="#top-selling" className="cursor-pointer">
                Top Selling Products
              </a>
              <a href="#testimonials" className="cursor-pointer">
                Testimonials
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row text-2xl gap-4 mb-3 cursor-pointer">
              <IoLogoGithub
                onClick={() =>
                  window.open("https://github.com/HarshSuthar05", "_blank")
                }
              />
              <TbBrandLeetcode
                onClick={() =>
                  window.open("https://leetcode.com/u/harshsuthar/", "_blank")
                }
              />
              <FaLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/harshsuthar05/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="text-sm md:text-base">
              <h3 className="flex gap-2 mt-1 justify-center md:justify-start">
                <FaLocationArrow className="relative top-[2px]" />
                Vadodara, Gujarat
              </h3>
              <h4 className="flex gap-2 mt-2 justify-center md:justify-start">
                <IoPhonePortraitOutline className="relative top-[2px]" />
                +91 7096109809
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

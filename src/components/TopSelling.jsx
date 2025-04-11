import React from "react";
import Salu from "../assets/Salu.jpeg";
import Raja from "../assets/Raja.jpeg";
import Varun from "../assets/Varun.jpeg";
import South from "../assets/South.jpeg";
import John from "../assets/John.jpeg";
import Ranbir from "../assets/Ranbir.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const TopSelling = ({ darkMode }) => {
  const items = [
    {
      img: Salu,
      description: "Shacket For Men",
      color: "Green",
      star: "4.8",
    },
    {
      img: John,
      description: "Party Shirt",
      color: "Black",
      star: "4.8",
    },
    {
      img: Ranbir,
      description: "Breatheable Shirt",
      color: "Blue",
      star: "4.9",
    },
    {
      img: Raja,
      description: "Blue Shirt",
      color: "Blue",
      star: "4.8",
    },
    {
      img: Varun,
      description: "Nehru Coat",
      color: "Navy Blue",
      star: "4.8",
    },
    {
      img: South,
      description: "Summer Shirt",
      color: "Blue",
      star: "4.8",
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <motion.div
      className="overflow-x-hidden w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div
        id="top-selling"
        className="w-full h-full flex items-center justify-center flex-col p-3 font-sans overflow-x-hidden"
      >
        <h1 className="text-2xl font-bold tracking-wide mt-2">
          Top Selling Products
        </h1>
        <p className="w-50 md:w-70 m-3 font-light text-center">
          Choosen by many due to a reason ,<br />
          Grab the opportunity to hold the Precious Collection!
        </p>
        <div className="w-full overflow-hidden">
          <div className="w-full h-full mt-4 px-12">
            <Slider {...settings}>
              {items.map((item, index) => (
                <div key={index} className="p-2">
                  <div
                    className={`flex flex-col rounded-xl w-[200px] p-2 h-64 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${
                      darkMode
                        ? "bg-gray-600 shadow-gray-500"
                        : "bg-gray-200 shadow-gray-300"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="Image"
                      className="h-40 w-full object-cover object-top rounded-md"
                    />
                    <h4 className="tracking-wide pt-2">{item.description}</h4>
                    <span className="font-extralight text-sm">
                      {item.color}
                    </span>
                    <span className="text-[13px] pt-2">{item.star} ★</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopSelling;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shopping_1 from "../assets/Shopping_1.jpeg";
import Shopping_2 from "../assets/Shopping_2.jpeg";
import Shopping_3 from "../assets/Shopping_3.jpeg";
import "../index.css";

const Hero = ({ darkMode }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const items = [
    {
      id: 1,
      title: "Buy Now At 50% Off",
      Description:
        "You can now buy any of the womenswear at half the price. Offer valid for limited time.",
      img: Shopping_1,
    },
    {
      id: 2,
      title: "Buy Menswear At 75% Off",
      Description:
        "You can now buy any of the menswear at 75% off the price. Offer valid for limited time.",
      img: Shopping_2,
    },
    {
      id: 3,
      title: "Buy OfficeWear At 60% Off",
      Description:
        "You can now buy any of the officewear at 60% off the price. Offer valid for limited time.",
      img: Shopping_3,
    },
  ];

  return (
    <div
      id="offers"
      className={`relative w-full flex flex-col items-center py-10 overflow-hidden ${
        darkMode
          ? "bg-gray-700 shadow-md shadow-gray-600 text-white"
          : "bg-gray-100 shadow-md shadow-gray-200 text-black"
      }`}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 px-4 z-10">
        <div className="max-w-md text-center md:text-left">
          <h1 className="typing text-2xl font-bold">Your Search Ends Here!</h1>
          <p className="text-sm font-light mb-4">
            Find the latest collection at a discounted price!
          </p>
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="w-full md:w-[35rem] h-auto">
          <Slider {...settings}>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center py-6 px-2 text-black"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 w-full">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-sm font-light mb-2">
                      {item.Description}
                    </p>
                    <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
                      Order Now
                    </button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-40 h-40 object-cover rounded-xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;

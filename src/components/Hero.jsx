import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shopping_1 from "../assets/Shopping_1.jpeg";
import Shopping_2 from "../assets/Shopping_2.jpeg";
import Shopping_3 from "../assets/Shopping_3.jpeg";
import "../index.css";

const Hero = ({ darkMode }) => {
  var settings = {
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
        "You can now buy any of the womenswear at half the price.Offer valid for limited time.",
      img: Shopping_1,
    },
    {
      id: 2,
      title: "Buy Menswear At 75% Off",
      Description:
        "You can now buy any of the menswear at 75% off the price.Offer valid for limited time.",
      img: Shopping_2,
    },
    {
      id: 3,
      title: "Buy OfficeWear At 60% Off",
      Description:
        "You can now buy any of the menswear at 75% off the price.Offer valid for limited time.",
      img: Shopping_3,
    },
  ];
  return (
    <div
      id="offers"
      className={`relative ${
        darkMode
          ? "bg-gray-700 shadow-lg shadow-gray-600"
          : "bg-gray-200 shadow-md shadow-gray-200"
      } w-screen min-h-[20rem] flex justify-center items-center overflow-hidden`}
    >
      <div className="w-1/3 h-[70%] bg-green-200 rounded-lg absolute rotate-45 -top-1/2 left-1/2" />
      <div className="font-sans p-2">
        <h1 className="font-bold text-2xl tracking-wide typing">
          Your Search Ends Here!
        </h1>
        <p className="font-extralight w-40 md:w-70 my-2">
          Find The Latest Collection At A Discounted Price!
        </p>
        <button className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 cursor-pointer">
          Shop Now
        </button>
      </div>
      <div className="w-[35rem] h-[24rem]">
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center py-10 px-4 bg-transparent relative"
            >
              <div className="flex flex-col m-auto md:flex-row items-center gap-8 text-black p-8 rounded-xl shadow-lg max-w-3xl bg-white/70 backdrop-blur-sm z-10">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-sans font-bold text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light mb-4 max-w-md">
                    {item.Description}
                  </p>
                  <button className="px-4 py-2 bg-green-500 font-bold text-white rounded hover:bg-green-700 cursor-pointer">
                    Order Now
                  </button>
                </div>
                <div className="flex-1 flex justify-center items-center h-60">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Modi from "../assets/Modi.jpeg";
import Putin from "../assets/Putin.jpeg";
import Rohit from "../assets/Rohit.jpeg";
import Virat from "../assets/Virat.jpeg";
import Mukesh from "../assets/Mukesh.jpeg";
import Suit from "../assets/Suit.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ darkMode }) => {
  const items = [
    {
      img: Virat,
      description:
        "“These tees fit so well, even my cover drive looks more stylish now. Great job, team!”",
      name: "Virat Kohli",
    },
    {
      img: Modi,
      description:
        "“Vocal for Local.This site truly delivers ‘Sabka Saath, Sabka Vikaas’!”",
      name: "Narendra Modi",
    },
    {
      img: Rohit,
      description:
        "“Garden me ghoomne waalon ladko ke liye kapde lene aaya tha, khud ke lex baitha”",
      name: "Rohit Sharma",
    },
    {
      img: Putin,
      description:
        "“Just hit Buy Now . I’ve always had a thing for pressing red buttons. No hesitation.”",
      name: "Vladimir Putin",
    },
    {
      img: Mukesh,
      description:
        "“Too rich to check prices, too broke to click Buy Now . So I added it to my wishlist.”",
      name: "Mukesh Ambani",
    },
    {
      img: Suit,
      description:
        "“A Developer Doing His Best to Market His Product. Dev by Day, Marketer by Panic!”",
      name: "Harsh Suthar",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    className: "center",
    centerMode: true,
    rtl: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      id="testimonials"
      className="w-full h-full flex flex-col justify-center items-center font-sans py-10 px-4"
    >
      <h1 className="text-2xl font-bold tracking-wide p-3 text-center">
        Testimonials
      </h1>
      <span className="max-w-md font-light text-center">
        Hear What Our Regular Customers Says!
      </span>
      <div
        className={`w-full h-auto my-10 p-5 ${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        } shadow-md`}
      >
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className={`flex flex-col w-full max-w-[280px] sm:max-w-xs h-auto sm:h-[250px] px-3 py-4 sm:px-4 sm:py-6 gap-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 
                  ${
                    darkMode
                      ? "bg-stone-900 shadow-stone-700"
                      : "bg-gray-200 shadow-gray-600"
                  }
                `}
              >
                <div className="flex items-center justify-between px-2">
                  <img
                    src={item.img}
                    className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] object-cover rounded-full object-top"
                    alt={item.name}
                  />
                  <RiDoubleQuotesR className="text-xl sm:text-2xl" />
                </div>
                <p className="font-light px-2 text-xs sm:text-sm md:text-base">
                  {item.description}
                </p>
                <h2 className="font-bold px-2 text-xs sm:text-sm md:text-base">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

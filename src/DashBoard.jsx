import React from "react";
import Hero from "./components/Hero";
import TopSelling from "./components/TopSelling";
import Testimonials from "./components/Testimonials";

const DashBoard = (props) => {
  return (
    <div>
      <Hero darkMode={props.darkMode} />
      <TopSelling darkMode={props.darkMode} />
      <Testimonials darkMode={props.darkMode} />
    </div>
  );
};

export default DashBoard;

import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import LinkNavBar from "./LinkNavBar";
import DashBoard from "./DashBoard";
import Footer from "./Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("bgColor") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("bgColor", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } w-full min-h-screen`}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <LinkNavBar />
      <DashBoard darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

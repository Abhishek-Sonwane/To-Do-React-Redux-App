import React from "react";
import { assets } from "../assets";

const Navbar = ({darkmode, toggleDarkMode,toggleSidebar}) => {
  
  // console.log(darkmode);
  
  
  return (
    <div className="w-full fixed top-0 z-50 bg-[#FBFDFC] border-b dark:bg-[#242424] dark:border-[#242424]">
      <div className="flex items-center p-2 h-[56px] flex-row justify-between">
        <div className="flex items-center ml-4 gap-4">
          <img src={assets.menu_logo} alt="menu" className="w-6 h-6 cursor-pointer text-gray-700 dark:text-white" onClick={toggleSidebar}/>
          <a href="/">
            <img src={assets.logo_mark} alt="logomark" className="w-8 h-8" />
          </a>
          <span className=" text-[#3F9142] font-bold text-2xl font-sen">
            DoIt
          </span>
        </div>
        <div className="flex gap-4">
          <img
            src={assets.search}
            alt="image"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src={assets.app_grid}
            alt="image"
            className="w-6 h-6 cursor-pointer"
          />
          <button onClick={toggleDarkMode}>
          {
            !darkmode ?<img
            src={assets.sun_logo}
            alt="image"
            className="w-6 h-6 cursor-pointer dark:text-white"
          /> :<img
            src={assets.moon_logo}
            alt="image"
            className="w-6 h-6 cursor-pointer dark:text-white"
          />
          }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { assets } from "../assets";
import DoughnutChart from "./DoughnutChart";

const Sidebar = ({ isSidebarOpen }) => {
  // console.log(isSidebarOpen);

  return (
    <div
      className={`fixed md:relative top-0 left-0 w-72 h-screen pt-16 px-4 text-white bg-white sm:translate-x-0 dark:bg-[#2C2C2C] transition-transform ${
        isSidebarOpen ? "translate-x-0" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={assets.profile_image}
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <span className="my-2">Hey, ABCD</span>
        <div className="">
          <div className="w-60 min-h-fit py-2  dark:bg-[#232323] flex text-sm">
            <ul className="flex flex-col items-start w-full justify-center text-sm">
              <li className="w-full h-10 hover:bg-[#35793729]/20 hover:text-[#98E19B]">
                <button className="flex items-center gap-4 p-2">
                  <img src={assets.task} alt="calender" className="w-6 h-6" />
                  <span>All Tasks</span>
                </button>
              </li>
              <li className="w-full h-10 hover:bg-[#35793729]/20 hover:text-[#98E19B]">
                <button className="flex items-center gap-4 p-2">
                  <img
                    src={assets.calender}
                    alt="calender"
                    className="w-6 h-6"
                  />
                  <span>Today</span>
                </button>
              </li>
              <li className="w-full h-10 hover:bg-[#35793729]/20 hover:text-[#98E19B]">
                <button className="flex items-center gap-4 p-2">
                  <img src={assets.clock} alt="calender" className="w-6 h-6" />
                  <span>Important</span>
                </button>
              </li>
              <li className="w-full h-10 hover:bg-[#35793729]/20 hover:text-[#98E19B]">
                <button className="flex items-center gap-4 p-2">
                  <img src={assets.plan} alt="calender" className="w-6 h-6" />
                  <span>Planned</span>
                </button>
              </li>
              <li className="w-full h-10 hover:bg-[#35793729]/20 hover:text-[#98E19B]">
                <button className="flex items-center gap-4 p-2">
                  <img
                    src={assets.assigned}
                    alt="calender"
                    className="w-6 h-6"
                  />
                  <span>Assigned to me</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-60 min-h-fit dark:bg-[#232323] mt-2 flex items-center gap-4 p-2 text-sm">
            <button className="">
              <img src={assets.add} alt="calender" className="w-6 h-6 m-4" />
            </button>
            <span>Add List</span>
          </div>
          <div className="w-60 min-h-fit dark:bg-[#232323] mt-2 text-sm">
            <div className="p-4 border-b border-white">
              <div className="flex items-center justify-between">
                <span>Add List</span>
                <img src={assets.info} alt="calender" className="w-6 h-6" />
              </div>
              <span className="font-medium text-xl">11</span>
            </div>
            <div className="flex flex-col items-center p-2">
                <DoughnutChart />
            </div>
            <div className="px-6">
                <ul className="flex gap-8 items-center list-disc">
                    <li className="marker:text-[#3F9142]">Pending</li>
                    <li className="marker:text-[#A0EDA4]">Done</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

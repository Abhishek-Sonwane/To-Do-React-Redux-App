import React from "react";
import ShowTask from "./ShowTask";
import { assets } from "../assets";

const TaskSideBar = ({ isTaskView, toggleTaskView }) => {
  const task = "Task";
  return (
    <div
      className={`top-0 right-0 w-96 h-screen pt-24 px-4 text-white bg-white sm:translate-x-0 dark:bg-[#2C2C2C] transition-transform ${
        isTaskView ? "translate-x-0" : "hidden"
      }`}
    >
      <div className="">
        <ShowTask task={task} />
        <ul className="w-11/12">
          <li className="flex items-center gap-4 p-2 border-t-2 border-[#496E4B33]">
            <img src={assets.add} alt="img" className="w-5 h-5" />
            Add Step
          </li>
          <li className="flex items-center gap-4 p-2 border-t-2 border-[#496E4B33]">
            <img src={assets.notification} alt="img" className="w-5 h-5" />
            Set Remainder
          </li>
          <li className="flex items-center gap-4 p-2 border-t-2 border-[#496E4B33]">
            <img src={assets.calender} alt="img" className="w-5 h-5" />
            Add Due Date
          </li>
          <li className="flex items-center gap-4 p-2 border-t-2 border-[#496E4B33]">
            <img src={assets.repeat} alt="img" className="w-5 h-5" />
            Repeat
          </li>
          <li className="flex items-center gap-4 p-2 border-t-2 border-[#496E4B33]">
            <button>Add Notes</button>
          </li>
        </ul>
      </div>

      <div className="w-full px-4 py-2 border-t-2 border-[#496E4B33] flex items-center justify-between fixed bottom-6 right-0">
        <img
          onClick={toggleTaskView}
          src={assets.close}
          alt="image"
          className="w-4 h-4 cursor-pointer"
        />
        <p>Created Today</p>
        <img src={assets.deleteBtn} alt="image" className="w-6 h-7" />
      </div>
    </div>
  );
};

export default TaskSideBar;

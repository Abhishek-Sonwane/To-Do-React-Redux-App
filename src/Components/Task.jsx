import React from "react";
import CompletedTask from "./CompletedTask";
import ShowTask from "./ShowTask";
import { assets } from "../assets";

const Task = ({ toggleTaskView, isTaskView }) => {
  const task = "Task";
  return (
    <>
      {" "}
      <div className="pt-16 w-full flex flex-col items-center">
        {/* <AddTask task={task} /> */}

        <div className="w-11/12 flex items-center gap-3">
          <p className="text-[#97F69BB5] flex items-start">To Do </p>
          <img src={assets.dropdown} alt="image" className="w-3 h-2" />
        </div>
        <div className="w-11/12 min-h-44 bg-[#2F3630] text-black flex flex-col justify-center">
          <input
            name="task"
            id="task"
            className="w-full min-h-1/2 bg-transparent p-4"
            placeholder="ADD TASK"
          ></input>
          <div className="flex justify-between items-center p-4">
            <div>
              <ul className="flex gap-4">
                <li>
                  <button>
                    <img src={assets.notification} alt="image" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={assets.repeat} alt="image" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={assets.calender} alt="image" />
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-[#357937E0] py-2 px-4 rounded-lg text-white">
                ADD TASK
              </button>
            </div>
          </div>
        </div>

        <ShowTask
          task={task}
          toggleTaskView={toggleTaskView}
          isTaskView={isTaskView}
        />

        <p className="w-full flex flex-col items-center p-2">
          <span className="w-11/12 flex justify-start dark:text-white">
            Completed
          </span>
        </p>
        <CompletedTask
          task={task}
          toggleTaskView={toggleTaskView}
          isTaskView={isTaskView}
        />
        <CompletedTask
          task={task}
          toggleTaskView={toggleTaskView}
          isTaskView={isTaskView}
        />
        <CompletedTask
          task={task}
          toggleTaskView={toggleTaskView}
          isTaskView={isTaskView}
        />
      </div>
    </>
  );
};

export default Task;

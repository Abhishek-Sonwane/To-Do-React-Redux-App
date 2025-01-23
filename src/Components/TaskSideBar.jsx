import React, { useEffect, useState } from "react";
import { assets } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todosSlice";

const TaskSideBar = ({ isTaskView, toggleTaskView, currentTask }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleCurrTask = () => {
    todos.filter((el) => {
      if (el.id == currentTask) {
        setTodo(el);
      }
    });
  };

  useEffect(() => {
    handleCurrTask();
  }, [currentTask]);

  console.log(todo);

  return (
    <div
      className={`top-0 right-0 w-96 h-screen pt-24 px-4 text-white bg-white sm:translate-x-0 dark:bg-[#2C2C2C] transition-transform ${
        isTaskView ? "translate-x-0" : "hidden"
      }`}
    >
      <div className="">
        <div className="w-11/12 h-20 border-t-2 border-[#496E4B33] flex items-center justify-between px-4">
          {todo.completed ? (
            <li className="w-full list-none flex items-center justify-between dark:text-white">
              <div className="flex items-center gap-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 cursor-pointer text-[#496E4B33] bg-[#496E4B33] border-gray-300 rounded"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  defaultChecked
                />
                <span
                  className={`${
                    todo.completed ? "line-through" : ""
                  } cursor-pointer`}
                  onClick={toggleTaskView}
                >
                  {todo.text}
                </span>
              </div>
              <div className="fill-white text-white">
                <img
                  src={assets.star}
                  alt="image"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </li>
          ) : (
            <li className="w-full list-none flex items-center justify-between dark:text-white">
              <div className="flex items-center gap-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 cursor-pointer text-[#496E4B33] bg-[#496E4B33] border-gray-300 rounded"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                />
                <span
                  className={`${
                    todo.completed ? "line-through" : ""
                  } cursor-pointer`}
                  onClick={toggleTaskView}
                >
                  {todo.text}
                </span>
              </div>
              <div className="fill-white text-white">
                <img
                  src={assets.star}
                  alt="image"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </li>
          )}
        </div>
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
        <img
          src={assets.deleteBtn}
          alt="image"
          className="w-6 h-7 cursor-pointer"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
            toggleTaskView();
          }}
        />
      </div>
    </div>
  );
};

export default TaskSideBar;

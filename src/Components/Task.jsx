import React, { useState } from "react";
import { assets } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../features/todos/todosSlice";

const Task = ({ toggleTaskView, isTaskView, setCurrentTask }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

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
            onChange={(e) => setText(e.target.value)}
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
              <button
                className="bg-[#357937E0] py-2 px-4 rounded-lg text-white"
                onClick={handleAddTodo}
              >
                ADD TASK
              </button>
            </div>
          </div>
        </div>

        {todos.map((todo) => (
          <div className="w-11/12 h-20 border-t-2 border-[#496E4B33] flex items-center justify-between px-4">
            {todo.completed ? (
              ""
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
                    onClick={() => {
                      toggleTaskView();
                      setCurrentTask(todo.id);
                    }}
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
        ))}

        <p className="w-full flex flex-col items-center p-2">
          <span className="w-11/12 flex justify-start dark:text-white">
            Completed
          </span>
        </p>
        {todos.map((todo) => (
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
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Task;

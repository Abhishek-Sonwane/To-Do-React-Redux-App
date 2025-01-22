import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Task from "./Components/Task.jsx";
import TaskSideBar from "./Components/TaskSideBar.jsx";
const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTaskView, setIsTaskView] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTaskView = () => {
    setIsTaskView(!isTaskView);
  };

  return (
      <div
        className={`w-full min-h-screen h-full flex items-center dark:bg-[#232323] ${
          darkmode && "dark"
        }`}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          darkmode={darkmode}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Task toggleTaskView={toggleTaskView} isTaskView={isTaskView} />
        <TaskSideBar isTaskView={isTaskView} toggleTaskView={toggleTaskView} />
      </div>
  );
};

export default App;

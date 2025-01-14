import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <TaskList />
          {/* <TaskChart /> */}
        </div>
      </div>
    </div>
  );
}

export default App;


import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./Sidebar.css";


import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Sidebar() {
  const [lists, setLists] = useState(["Today", "Important", "Planned", "Assigned to me"]);
  const [newListName, setNewListName] = useState("");

  // Chart data
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [8, 3], 
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#ef5350"],
      },
    ],
  };

  const handleAddList = () => {
    if (newListName.trim() !== "") {
      setLists([...lists, newListName.trim()]);
      setNewListName(""); 
    }
  };

  return (
    
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <div className="profile-photo">
          <span className="initials">H</span>
        </div>
        <div className="profile-name">Harshit Rishav</div>
      </div>

      
      {/* Menu Section */}
      <ul className="menu">
        {lists.map((list, index) => (
          <li key={index} className="menu-item">
            {list}
          </li>
        ))}
      </ul>

      {/* Add List Section */}
      <div className="add-list">
        <input
          type="text"
          value={newListName}
          placeholder="New list name"
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button onClick={handleAddList}>Add List</button>
      </div>
      {/* Chart Section */}
      <div className="chart-container">
        <h3>Your Progress</h3>
        <Pie data={data} />
      </div>

    </div>
  );
}

export default Sidebar;

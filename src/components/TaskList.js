import React, { useState, useEffect } from "react";
import "./TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newTaskItem = {
      id: Date.now(),
      text: newTask.trim(),
      priority,
      completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask("");
    setPriority("Medium");
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div className="task-list">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add a Task"
          className="add-task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          className="priority-select"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.priority.toLowerCase()} ${
              task.completed ? "completed" : ""
            }`}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
              />
              {task.text}
              <span className="priority">({task.priority})</span>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

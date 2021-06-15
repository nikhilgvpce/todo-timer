import React, { useState } from "react";
import TasksList from "../TasksList/tasksList";
import "./todo.css"

const Todo = () => {
  const [currTask, setCurrentTask] = useState();
  const [tasksList, setTasksList] = useState([]);

  const handleAdd = (e) => {
    const _tasksList = [
      ...tasksList,
      {
        task: currTask,
        time: Date.now(),
      },
    ];
    setTasksList(_tasksList);
  };

  return (
    <div className="main">
      <div className="taskentery">
        <input
          className="input"
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="enter your task here"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {tasksList.length > 1 && <TasksList tasksList={tasksList} />}
    </div>
  );
};

export default Todo;

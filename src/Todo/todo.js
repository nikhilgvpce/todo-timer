import React, { useState } from "react";
import TasksList from "../TasksList/tasksList";
import "./todo.css";

const Todo = () => {
  const [currTask, setCurrentTask] = useState();
  const [tasksList, setTasksList] = useState([]);

  const handleAdd = () => {
    setCurrentTask('');
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
          value={currTask}
        />
        <button onClick={() => handleAdd()}>Add</button>
      </div>
      {tasksList.length > 0 && <TasksList tasksList={tasksList} />}
    </div>
  );
};

export default Todo;

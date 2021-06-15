import React, { useEffect, useState } from "react";
import utils from "../utils";
import "./tasksList.css";

const TasksList = ({ tasksList }) => {
  const [currTime, setCurrTime] = useState(Date.now());

  useEffect(() => {
    setTimeout(() => {
      const diff = Date.now() - currTime;
      setCurrTime(diff);
    }, 1000);
  });

  const getTime = (time) => {
    const diff = Math.abs(time - Date.now());
    const minutes = utils.getMinutesPassed(diff);
    const hours = utils.getHoursPassed(diff);
    if (minutes < 1) {
      return utils.getMessage();
    } else if (minutes >= 1 && hours < 1) {
      return utils.getMessage(minutes, "minute");
    } else if (hours >= 1) {
      return utils.getMessage(hours, "hour");
    }
  };

  const getTasks = (tasksList) => {
    return tasksList.map((task) => {
      return (
        <tr>
          <td>{task.task}</td>
          <td>{getTime(task.time)}</td>
        </tr>
      );
    });
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Tasks List</th>
          </tr>
        </thead>
        <body>
          <tr>
            <td>Task Name</td>
            <td>Create At</td>
          </tr>
          {getTasks(tasksList)}
        </body>
      </table>
    </div>
  );
};

export default TasksList;

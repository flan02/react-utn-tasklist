/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")));
  let storage = JSON.parse(localStorage.getItem("task"));

  return (
    <div>
      <br />
      <h1 className="main-title">Task List</h1>
      <br />
      <div className="grid-task">
        {task != null &&
          storage.length != 0 &&
          task.map((item) => (
            <TaskItem
              key={item.id}
              title={item.title}
              text={item.text}
              id={item.id}
              date={item.date}
            />
          ))}
        {(task == null || storage.length == 0 || storage == null) && (
          <div className="home-notask">
            <h1 className="home-title">Add your first Task</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;

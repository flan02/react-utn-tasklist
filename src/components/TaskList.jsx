/* eslint-disable no-unused-vars */
import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")));

  return (
    <div>
      <br />
      <h1>Task List</h1>
      <br />
      <div className="grid-task">
        {task != null && task != [] ? (
          task.map((item) => (
            <TaskItem
              key={item.id}
              title={item.title}
              text={item.text}
              id={item.id}
            />
          ))
        ) : (
          <div className="notask">
            <h1>Add your first task</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;

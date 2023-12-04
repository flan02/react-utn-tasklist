//import { useId } from "react";

import { useState } from "react";

function TaskForm() {
  const [msg, setMsg] = useState("");
  let taskList = [];

  const setLocalStorage = (title, text, id) => {
    const time = Date.now();
    const hours = new Date(time).getHours();
    const minutes = new Date(time).getMinutes();
    const seconds = new Date(time).getSeconds();
    const taskTime = new Date(time).toLocaleDateString();
    const dateFormated = `Created at: ${taskTime} ${hours}:${minutes}:${seconds}hs`;

    try {
      taskList = JSON.parse(localStorage.getItem("task"));
      if (taskList === null) taskList = [];
      taskList.push({ id, title, text, date: dateFormated });
      localStorage.setItem("task", JSON.stringify(taskList));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-cont">
      <form action="" className="form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="text">Text</label>
        <textarea
          name="text"
          id="text"
          cols={20}
          rows={10}
          className="update-textarea"
        />
        <button
          type="button"
          className="btn-submit"
          onClick={() => {
            let id = Math.random();
            setLocalStorage(
              document.getElementById("title").value,
              document.getElementById("text").value,
              id
            );
            setMsg("Task added successfully");
            setInterval(() => {
              setMsg("");
            }, 2000);
          }}
        >
          Enter
        </button>
      </form>
      <p className="msg-added">{msg}</p>
    </div>
  );
}

export default TaskForm;

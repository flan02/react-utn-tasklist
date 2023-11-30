//import { useId } from "react";

function TaskForm() {
  let taskList = [];

  const setLocalStorage = (title, text, id) => {
    console.log(id);
    try {
      taskList = JSON.parse(localStorage.getItem("task"));
      if (taskList === null) {
        taskList = [];
      }

      taskList.push({ id, title, text });
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
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

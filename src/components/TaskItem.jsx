import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
function TaskItem({ text, title, id }) {
  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState(text);
  const [msg, setMsg] = useState(false);
  useEffect(() => {
    if (msg) {
      alert("Task updated");
      setMsg(false);
    }
  }, [msg]);

  return (
    <div className="task" id={`${id}`}>
      <div className="task-firstline">
        <h3>{title}</h3>
        <section className="task-icons">
          <FaPencilAlt className="icons" onClick={() => setEdit(true)} />
          <FaTrash
            className="icons"
            onClick={() => {
              if (confirm(`Are you sure todelete Task ${title}?`) === true) {
                const taskList = JSON.parse(localStorage.getItem("task"));
                const newTaskList = taskList.filter((item) => item.id !== id);
                localStorage.setItem("task", JSON.stringify(newTaskList));
                document.getElementById(`${id}`).remove();
              }
            }}
          />
        </section>
      </div>
      <div className="task-note">
        {edit ? (
          <div className="update-note">
            <textarea cols={20} rows={8} className="update-textarea">
              {note}
            </textarea>
            <button
              className="update-submit"
              type="button"
              onClick={() => {
                setMsg(true);
                setNote(document.querySelector(".update-textarea").value);
                const taskList = JSON.parse(localStorage.getItem("task"));
                const newTaskList = taskList.filter((item) => item.id !== id);
                newTaskList.push({
                  id,
                  title,
                  text: document.querySelector(".update-textarea").value,
                });
                localStorage.setItem("task", JSON.stringify(newTaskList));
                setEdit(false);
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <p>{note}</p>
        )}
      </div>
    </div>
  );
}

export default TaskItem;

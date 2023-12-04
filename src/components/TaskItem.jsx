import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
function TaskItem({ text, title, id, date }) {
  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState(text);
  const [time, setTime] = useState(date);
  const [msg, setMsg] = useState(false);
  const [msgUpdated, setMsgUpdated] = useState("");
  useEffect(() => {
    if (msg) {
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
              //if (confirm(`Are you sure todelete Task ${title}?`) === true) {
              const taskList = JSON.parse(localStorage.getItem("task"));
              const newTaskList = taskList.filter((item) => item.id !== id);
              localStorage.setItem("task", JSON.stringify(newTaskList));
              document.getElementById(`${id}`).remove();
              //}
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
            {
              //* Crear aca el evento para enviar mensaje de actualizacion
            }
            <button
              className="update-submit"
              type="button"
              onClick={() => {
                setMsg(true);
                setNote(document.querySelector(".update-textarea").value);
                const taskList = JSON.parse(localStorage.getItem("task"));
                const newTaskList = taskList.filter((item) => item.id !== id);
                const time = Date.now();
                const hours = new Date(time).getHours();
                const minutes = new Date(time).getMinutes();
                const seconds = new Date(time).getSeconds();
                const taskTime = new Date(time).toLocaleDateString();
                const dateFormated = `Updated at: ${taskTime} ${hours}:${minutes}:${seconds}hs`;
                setTime(dateFormated);
                newTaskList.push({
                  id,
                  title,
                  text: document.querySelector(".update-textarea").value,
                  date: dateFormated,
                });
                localStorage.setItem("task", JSON.stringify(newTaskList));
                setMsgUpdated("Task updated successfully");
                setInterval(() => {
                  setMsgUpdated("");
                }, 2000);
                setEdit(false);
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="note-cont">
            <span>{note}</span>
            {msgUpdated !== "" && <h3 className="msg-updated">{msgUpdated}</h3>}
          </div>
        )}
      </div>
      <div className="date">
        <h6>{time}</h6>
      </div>
    </div>
  );
}

export default TaskItem;

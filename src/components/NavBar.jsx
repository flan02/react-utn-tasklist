import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="title">
      <h1 className="title-text">TaskList trabajo integrador final</h1>
      <div className="navbar">
        <Link className="log-btn" to="/">
          Task List
        </Link>
        <Link className="log-btn" to="login">
          Add Task
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

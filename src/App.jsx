import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<SignUp />} />
          <Route path={"*"} element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

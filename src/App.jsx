import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentDetailsForm from "./components/StudentDetailsForm";
import LevelBar from "./components/LevelBar";
import Login from "./components/login/Login";

function App() {
  const [count, setCount] = useState(0);

  


  return (
    // <div className=" bg-gray-50 min-h-screen flex justify-center items-center h-full custom-scrollbar">
    //   <LevelBar />

    // </div>
    <div className="">
      <Login />
    </div>
  );
}

export default App;

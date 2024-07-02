import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentDetailsForm from "./components/StudentDetailsForm";
import LevelBar from "./components/LevelBar";
import Login from "./components/login/Login";
import Layout from "./components/alumni-network/Layout";
import { Route, Routes } from "react-router-dom";
import PersonalInformation from "./components/alumni-network/PersonalInformation";
import Address from "./components/alumni-network/Address";



function App() {
  const [count, setCount] = useState(0);

  


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PersonalInformation />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

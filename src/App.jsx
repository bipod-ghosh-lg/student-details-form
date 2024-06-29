import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentDetailsForm from './components/StudentDetailsForm'
import LevelBar from './components/LevelBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-gray-50 min-h-screen h-full">
      <LevelBar />
      {/* <StudentDetailsForm/> */}
    </div>
  );
}

export default App

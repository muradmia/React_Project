import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/Task_Manager'
import Demo_task from './Components/Demo_task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Task></Task> */}
      <Demo_task></Demo_task>
    </div>
  )
}

export default App

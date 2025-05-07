import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/Task_Manager'
import Demo_task from './Components/Demo_task'
import ProductCard from './Components/Card'
import Card2 from './Components/Card2'
import CheckoutPage from './Components/Back'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Task></Task> */}
      <Demo_task></Demo_task>
      
      <Card2></Card2>
      {/* <ProductCard></ProductCard> */}
      <CheckoutPage></CheckoutPage>
    </div>
  )
}

export default App

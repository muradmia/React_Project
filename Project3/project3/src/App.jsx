import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckoutPage from './Components/Test'
import Test from './Components/Test'
import Checkout from './Components/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Test></Test> */}
      <Checkout></Checkout>
    </div>
  )
}

export default App

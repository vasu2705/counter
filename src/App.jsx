import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <div>{count}</div>
        <button onClick={()=>(count==0)?0:setCount((count)=>count-1)}>-</button>
      </div>
     
    </div>
  )
}

export default App

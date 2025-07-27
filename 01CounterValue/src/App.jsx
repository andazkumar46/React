import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter = 10

  const addValue = () =>{
    setCount(count + 1)
  }
  const subValue = () => {
    if (count < 1 ) {
      count = 0;
    }
    setCount(count - 1)
  }
  return (
    <>
    <div id='container'>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue} >Increment</button>
      <button onClick={subValue}>Decrement</button>
      </div>
    </>
  )
}

export default App

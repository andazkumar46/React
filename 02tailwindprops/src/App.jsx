import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "abc",
    age:28
  }
  return (
    <>
      <h1 className='text-green-500 text-5xl'>Tailwind CSS Test</h1>
      <Card username="Andaz" someObj = {myObj}/>
      <Card username="Aarav" />
    </>
  )
}

export default App

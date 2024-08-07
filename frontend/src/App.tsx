import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Aloha from fork
      {count}
      <button onClick={() => setCount(prev => prev + 1)}>increase</button>
    </>
  )
}

export default App

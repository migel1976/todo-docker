import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Aloha
      {count}
      <button onClick={() => setCount(prev => prev + 1)}>increase</button>
      <button onClick={() => setCount(prev => prev - 1)}>decrease</button>
    </>
  )
}

export default App

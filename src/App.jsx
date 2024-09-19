import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = () => {
    if (count == 20) {
      alert('Limit reached!')
      setCount(count = 20)
    }
    else{
      setCount(count + 1)
    }
    
  }
  const removeValue = () => {
    if(count == 0){
      alert('Linit reached!')
      setCount(count = 0)
    }
    else{
      setCount(count - 1)
    }
    
  }

  return (
    <>
    <h1>Parv with react</h1>
    <p>Current count: {count}</p>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

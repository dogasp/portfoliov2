import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World !</h1>
      <div className="card">
        <button onClick={() => setCount((count) => ++ count)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profileImg from '/profile.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
            <img src={profileImg} className="logo" alt="Ghost" />
        </a>
      </div>
      <h1>mitwilsch</h1>
      <p className="gme">
      💎🙌
      </p>
    </>
  )
}

export default App

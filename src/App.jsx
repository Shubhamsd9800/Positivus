import { useState } from 'react'
import React from 'react'
import LandingPage from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LandingPage/>
    </>
  )
}

export default App

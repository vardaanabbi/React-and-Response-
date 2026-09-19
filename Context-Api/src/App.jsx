import { useState } from 'react'
import ContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <h1>React and Context-Api</h1>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(6);

  const Increase = ()=> { 
  if(counter < 20)
      {
      setCounter(counter + 1) ;
      }
  }

  const decrease = () =>
  { 
    if(counter > 0)
    {setCounter(counter-1)} ; 

    
  }

  return (
    <>
     <h1>Namaste Dunia</h1>
     <h2> Counter Value : {counter} </h2>
     <button onClick={Increase}> ADD Count </button>
     <br />
     <button onClick={decrease}> Reduce Count </button>

    </>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function GreetName(props)
{
  return <h1 className='text-white'>
    My name is {props.name}
  </h1>
}

// or 

function PropsTest({name , role , aspiration , idol , girldfriend , diety})
{
  return <p className='text-white'>
    Hey ! My name is {name} . I will serve the role of {role} . my aspiration is to {aspiration} . i am looking for love . it would be great if i get a {girldfriend} . My idol is {idol} and I am looking to start worshipping {diety} .   
  </p>
}


function App() {

  return (
    <>
  <GreetName name="Vardaan" />
  <PropsTest name="Vardaan" role={"what a deterministic person can do from a small middle class family"} aspiration = "To serve my family with lot of love and service and make their life easier and comfortable " girldfriend="A loving and suportive life partner of my type would be a blessing" idol = {["Ratan Tata" , "Rajarshri Nandy" , "many more"]} diety="Skanda" />
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import {Home} from './components/Home.jsx'
import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import { RouterProvider } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/" ,
//     element: <Layout /> , 
//     children: [ // nested routes
//       {
//         path : "" , 
//         element: <Home /> ,
//       } , 
//       {
//       path: "contact" , 
//       element : <Contact /> // these paths are after the slash and elements are element to be renderedon that path 
//       }
//     ]
//   }
// ])

// another syntax for routing 

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>} />
      <Route path='contact' element = {<Contact/>} />
      <Route path = 'user/:user_name' element = {<User/>} />
      <Route path='github' element = {<Github />} />
   </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router = {router}/>
  </StrictMode>,
)

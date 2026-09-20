import { useEffect, useState } from 'react'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeButton'
import Card from './Components/Card'


function App() {
  const [Theme , setTheme] = useState("light") 
  const LightTheme = ()=> {setTheme("light")}
  const DarkTheme = ()=> {setTheme("dark")}

  // actual change in theme :

  useEffect(()=> 
  {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector("html").classList.add(Theme)
  } , [Theme])

  return (
    <>
<ThemeProvider value={{Theme , LightTheme , DarkTheme}}>     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {<ThemeBtn/>}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {<Card/>}
                    </div>
                </div>
            </div>
</ThemeProvider>
    </>
  )
}

export default App

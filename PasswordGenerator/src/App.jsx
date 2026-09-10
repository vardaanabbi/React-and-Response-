import { useState , useCallback , useEffect, useRef } from 'react'


function App() {
  const [length , setLength] = useState(8)
  const [num , setNum] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setPassword] = useState("")

  const passRef = useRef(null) // UseRef hook used 

  const passwordGenerator = useCallback(()=> {
    let pass = "" ; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    
    if(num) 
      {
      str += "1234567890" ; 
      }
    if(char)
      {
        str += "!@#$%^&*()_+={}-"  ;
      }  

    for(let i = 0 ; i < length ; i++)
    {
      let charact = Math.floor(Math.random()* (str.length)) ; 
      pass += str.charAt(charact)
    }

    setPassword(pass) ; 

  } , [length , num , char , setPassword]) 

  const copyPassword =useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password) ; 
  } , [password]) 

useEffect( ()=> { passwordGenerator()} , [length , num , char , setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-4xl text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-3 bg-white'>
          <input type="text" value={password} className='outline-none w-full py-1 my-2 px-3 text-gray-800 ' placeholder='password' readOnly ref={passRef} />
          <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={copyPassword} >copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input type="range" min={6} max={36} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} /> 
            <label htmlFor="length"> length : {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked= {num} id='numberInput' onChange={()=> {setNum(prev => !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked= {char} id='charInput' onChange={()=> {setChar(prev => !prev)}} />
            <label htmlFor="CharInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

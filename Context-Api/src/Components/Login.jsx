import React ,{useState , useContext} from "react";
import context from "../Context/UserContext";

function Login()
{

const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} = useContext(context) // pass that context into it jiski values chahiye 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }
    return (<>
    
        <h1> Login Page </h1>
        <input value={username} onChange={(e)=> setUsername(e.target.value) } type="text" placeholder="UserName" />
        <input value={password} onChange={(e)=> setPassword(e.target.value) } type="text" placeholder="Password" />

        <button onClick={handleSubmit} > Submit </button>
        </>
    )

}

export default Login
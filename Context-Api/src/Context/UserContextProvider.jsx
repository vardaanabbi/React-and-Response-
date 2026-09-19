import React, { Children, useState } from "react";
import context from "./UserContext.js";

function ContextProvider({children})
{
    const [user , setUser] = useState([]) ; 
    return (
        <context.Provider value={{user , setUser}}>
           {children}
        </context.Provider>
    )
}

export default ContextProvider
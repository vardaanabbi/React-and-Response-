import { createContext , useContext } from "react";

export const ToDo_Context = createContext() ; 

export const ToDo_Provider = ToDo_Context.Provider ; 

export const useTodo = ()=> {
    return useContext(ToDo_Context) 
}
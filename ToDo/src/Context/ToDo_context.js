import { createContext , useContext } from "react";

export const ToDo_Context = createContext(

    {
        todos: [{id: 1 , todo : "task" , completed : false}]
        , addTodo : (todo)=> {} , updateTodo : (id , todo)=> {} , deleteTodo : (todo) => {} ,                    toggleComplete : (id) => {}
    }
) ; 

// context me se functions aur properties vagera jo bhi chahiye sab utha lenge! 

export const ToDo_Provider = ToDo_Context.Provider ; 

export const useTodo = ()=> {
    return useContext(ToDo_Context) 
}
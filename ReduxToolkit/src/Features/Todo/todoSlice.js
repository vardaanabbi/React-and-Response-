import { createSlice , nanoid } from "@reduxjs/toolkit";  

// nanoid ka purpose unique id generate krna hai bs 

const initialState = {
    todos : [{id : 1 , text : "Narayan Narayan"}] // initial state of store 
}

export const todoSlice = createSlice(
    {
        name: "todo" , // name is important property , this name should be kept carefully
        initialState ,
        reducers: 
        {
            adTodo : (state , action) => {
                const todo = {id : nanoid() , text : action.payload}
                state.todos.push(todo) // updating the state 
            } , 
            removeTodo : (state , action) => {
                state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            } , 
        } 
    }
)
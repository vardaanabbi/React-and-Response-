import { useState } from "react";
import { useTodo } from "../Context/ToDo_context";

function TodoForm() {
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        addTodo({todo , completed:false}) // paassed an object because function me ye define tha ki object spread kr denge . so passed an object over here . 
        setTodo("") 
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
            value={todo} 
            onChange={(e) => {setTodo(e.target.value)}}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


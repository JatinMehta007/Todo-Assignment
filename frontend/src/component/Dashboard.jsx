import { useEffect, useState } from "react";
import { CreateTodo } from "./CreateTodo";
import { Todos } from "./Todos";
import { Navbar } from "./Navbar";

export function Dashboard(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/todos", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          }
        })
          .then(res => res.json())
          .then(data => setTodos(data.todos));
      }, []);

    return(
        <div>
          <Navbar></Navbar>

        <CreateTodo setTodos={setTodos}></CreateTodo>
        <Todos todos={todos} setTodos = {setTodos}></Todos>
        
        </div>
    )
}
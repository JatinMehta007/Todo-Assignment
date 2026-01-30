import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { CreateTodo } from "./CreateTodo";
import { Todos } from "./Todos";
import axios from "axios";

export function BoardPage() {
  const { id } = useParams(); 
  const [todos, setTodos] = useState([]);

  const [boardName, setBoardName] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/todos/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => setTodos(res.data.todos))
      .catch(err => console.error(err));
  }, [id]);

  // fetch board name
  useEffect(() => {
    axios.get(`http://localhost:3000/board/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => setBoardName(res.data.name))
      .catch(err => console.error(err));
  }, [id]);



  return (
    <div>
      <Navbar />

      <h1 className="text-4xl border border-zinc-300 border-dashed text-blue-500 font-black text-center mt-10">
        {boardName}
      </h1>

      {/* Create Todo for this board */}
      <CreateTodo setTodos={setTodos} boardId={id} />

      {/* List Todos */}
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
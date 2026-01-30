import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Boards } from "./Board";
import { CreateBoard } from "./CreateBoard";

export function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/boards", {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(data => setBoards(data.boards));
  }, []);

  // Fetch Todos by Board
  useEffect(() => {
    if (!selectedBoard) return;

    fetch(`http://localhost:3000/todos/${selectedBoard}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => setTodos(data.todos));
  }, [selectedBoard]);

  return (
    <div>
      <Navbar />
      {/* Board Section */}
      <CreateBoard setBoards={setBoards} boards={boards} />
      <div className="mt-6">
      <Boards  boards={boards} setBoards={setBoards} setSelectedBoard={setSelectedBoard} />
      </div>
    

    </div>
  );
}
import { RiDeleteBin6Fill } from "@remixicon/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Boards({ boards,setBoards }) {
  const navigate = useNavigate();
  
  const deleteBoard = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/board/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });

      setBoards(prev => prev.filter(b => b._id !== id));
      toast.success("Board deleted");
  
    } catch (err) {
      toast.error("Delete failed");
    }
  };
  return (
    <div>
      {boards.map(board => (
        <div className="flex justify-between mx-auto items-center border p-2 my-2 font-used font-bold text-2xl w-[70%]">   
        <button
          key={board._id}
          onClick={() => navigate(`/board/${board._id}`)}
          className="mx-auto capitalize"
          >
          {board.name}
        </button>
        <button onClick={()=> deleteBoard(board._id)} className="mr-5">
          <RiDeleteBin6Fill></RiDeleteBin6Fill>
        </button>
            </div>
      ))}
    </div>
  );
}
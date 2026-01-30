
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export function CreateBoard({ setBoards , boards}) {
  const [name, setName] = useState("");

  const createBoard = async () => {
    if (!name) return toast.error("Board name required");

    const res = await axios.post(
      "http://localhost:3000/board",
      { name },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );

    setBoards(prev => [...prev, res.data]);
    setName("");
    toast.success("Board Created");
  };

  return (
    <div className="flex flex-col font-used gap-5 mt-10 justify-center items-center">
        <p className="flex font-black flex-col text-center text-7xl  "> Organize Your Work with  <span className="text-blue-500 underline">Boards</span> </p>

       
            <div className=" gap-4 flex ">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-2 border border-black "
        placeholder="Board Name"
        />
      <button
        onClick={createBoard}
        className="bg-[#0083ff] text-white    px-5 font-bold py-3"
        >
        Create Board
      </button>

          </div>

          {boards.length === 0 && (
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-black text-zinc-700">
            No Boards Yet
          </h2>
          <p className="text-zinc-500 mt-2">
            Create your first board to organize your tasks 🚀
          </p>
        </div>
      )}
    </div>
  );
}
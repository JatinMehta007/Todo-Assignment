import { useState } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../../config";
import { Spinner } from "./Spinner";

export function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTodo = async () => {
    if (!title || !description) {
      return toast.error("All fields required");
    }

    try {
      setLoading(true);

      const res = await fetch(`${BACKEND_URL}/todo`, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      });

      const json = await res.json();
      setTodos(prev => [...prev, json]);
      toast.success("Todo added");

      setTitle("");
      setDescription("");

    } catch (err) {
      toast.error("Failed to add todo");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
   return (
     <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
       <Spinner />
     </div>
   );
 }

  return (
    <div className="flex font-used gap-5 mt-10 justify-center items-center">

      <div>
        <p className="font-black text-2xl">Title</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 border h-8"
          type="text"
          placeholder="Title"
        />
      </div>

      <div>
        <p className="font-black text-2xl">Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-2 h-8 mt-1 border resize-none"
          placeholder="Description"
        />
      </div>

      <button
        disabled={loading}
        onClick={handleAddTodo}
        className={`px-5 py-3 font-bold text-white rounded 
          ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-[#0083ff]"}`}
      >
        {loading ? "Adding..." : "Add a Todo"}
      </button>

    </div>
  );
}
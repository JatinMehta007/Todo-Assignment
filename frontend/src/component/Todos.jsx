import { RiDeleteBin6Fill } from "@remixicon/react";
import axios from "axios";
import toast from "react-hot-toast";

export function Todos({ todos, setTodos }) {

      const markCompleted = async (id) => {
        await fetch("http://localhost:3000/completed", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id })
        });
    
        setTodos(prev =>
          prev.map(todo =>
            todo._id === id ? { ...todo, completed: true } : todo
          )
        );
      };
    
      const Deleted = async (id)=>{
         try{
          const res = await axios.delete(`http://localhost:3000/todo/${id}`,{
            headers : {
              Authorization : localStorage.getItem("token")
            }
          });

          setTodos(prev => prev.filter(todo=>todo._id !== id));
          toast.success("Deleted Successfully");
         } catch(err){
          toast.error("Delete Failed");
          console.error(err);
         }
      }

      return (
        <div className="flex flex-col mt-24 font-used justify-center items-center gap-10">
          { todos.length === 0 ? ( 
            <div className="text-center mt-20">
        <h1 className="text-3xl font-black text-zinc-700">
          No Todos Yet
        </h1>
        <p className="text-zinc-500 mt-2">
          Create your first todo above 🚀
        </p>
      </div>
          )
          : ( todos.map((todo) => (
              <div key={todo._id} className="text-used border   p-2 w-[70%] grid grid-flow-col">
              <div>
              <h1 className="text-black text-2xl capitalize font-black">
              {todo.title}
              </h1>
              
              <h2>{todo.description}</h2>
              </div>
              <div className="flex justify-end gap-5 items-center">
              <button
              onClick={() => markCompleted(todo._id)}
              className=" border border-dashed border-zinc-500 text-black px-4 py-1 font-bold rounded"
              >
              {todo.completed ? "Completed" : "Mark as completed"}
              </button>
              <button onClick={()=>Deleted(todo._id)} className="">
              <RiDeleteBin6Fill></RiDeleteBin6Fill>
              </button>
              
              </div>
              </div>
            )))
          
        }
        </div>
      );
    }
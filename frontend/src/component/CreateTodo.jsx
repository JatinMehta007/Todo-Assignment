import { useState } from "react";
import toast from "react-hot-toast";

// start with capital letter CreateTodo
export function CreateTodo({setTodos}) {
   // react query
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   return <div className="flex  font-used gap-5 mt-10 justify-center items-center ">
      <div>
      <p className="font-black text-2xl">Title</p>
      <input id="title" className="px-2 border h-8" type="text" placeholder="Title" onChange={function (e) {
         const value = e.target.value;
         setTitle(e.target.value);
      }} ></input> <br />
      </div>

      <div>
      <p className="font-black text-2xl">Description</p>
      <textarea id="desc" type="text" className="px-2 h-8 mt-1 border resize-none" placeholder="Description" onChange={function (e) {
         const value = e.target.value;
         setDescription(e.target.value);
      }} /> 
      </div>

      <button className="bg-[#0083ff] text-white    px-5 font-bold py-3" onClick={() => {
         // axois
         fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token")
            }
          })
          .then(async (res) => {
            const json = await res.json();
            setTodos(prev => [...prev, json]);
            toast.success("Todo added");
            setTitle("");
            setDescription("");
          });
      }}>Add a Todo</button>

   </div>
}
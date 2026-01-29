import { useState } from "react";

// start with capital letter CreateTodo
export function CreateTodo({setTodos}) {
   // react query
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   //  const [completed, setCompleted] = useState("");
   return <div>

      <input id="title" style={{
         padding: 22,
         margin: 20

      }} type="text" placeholder="title" onChange={function (e) {
         const value = e.target.value;
         setTitle(e.target.value);
      }} ></input> <br />

      <input id="desc" style={{
         padding: 22,
         margin: 20
      }} type="text" placeholder="description" onChange={function (e) {
         const value = e.target.value;
         setDescription(e.target.value);
      }} />  <br />

      <button style={{
         padding: 22,
         margin: 20

      }} onClick={() => {
         // axois
         fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
               title: title,
               description: description,
               // completed: completed
            }),
            headers: {
               "content-type": "application/json"
            }
         })
            .then(async function (res) {
               const json = await res.json();
               setTodos(prev=>[...prev,json])
               alert("Todo added");
            })
      }}>Add a Todo</button>

   </div>
}
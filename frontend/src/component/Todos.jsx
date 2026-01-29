
export function Todos({todos}){
     return <div>

       {todos.map(function(todo,index){
             
       return <div key={index}> 
       <h1 className="text-black">{todo.title}</h1>
       <h2>{todo.description}</h2>
       {/* <button> {todo.completed==true ? "Completed " : "Mark as completed"}</button> */}
       </div>
       })}
       </div>
}

// {/* /* <h1>Go to gym</h1>
//       <h2>you neee to go to gym</h2>
//       <button>Mark as completed</button> */}
//      {/* /* // next way to do todos */}
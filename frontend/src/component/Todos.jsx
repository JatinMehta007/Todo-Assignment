export function Todos({ todos, setTodos }) {

      const markCompleted = async (id) => {
        await fetch("http://localhost:3000/completed", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id })
        });
    
        // Update UI
        setTodos(prev =>
          prev.map(todo =>
            todo._id === id ? { ...todo, completed: true } : todo
          )
        );
      };
    
      return (
        <div>
          {todos.map((todo) => (
            <div key={todo._id} className="text-used">
              <h1 className="text-black text-2xl capitalize font-black">
                {todo.title}
              </h1>
    
              <h2>{todo.description}</h2>
    
              <button
                onClick={() => markCompleted(todo._id)}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                {todo.completed ? "Completed" : "Mark as completed"}
              </button>
            </div>
          ))}
        </div>
      );
    }
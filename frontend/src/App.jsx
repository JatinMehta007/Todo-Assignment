import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Signup } from './component/Signup';
import { Dashboard } from './component/Dashboard';
function App() {
  const [todos, setTodos] = useState([]);
  
  // fetch("http://localhost/3000/todos")
  //   .then(async function(res){
  //     const json = await res.json();
  //     setTodos(json,todos);
  //   })

  return (
    <div>
     {/* <CreateTodo setTodos={setTodos}></CreateTodo>
     <Todos todos={todos}></Todos> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Signup></Signup>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App


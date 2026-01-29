import { useState } from 'react'
import './App.css'
import { Navbar }from './component/Navbar';
import { LandingPage } from './component/Landingpage';
import { Footer } from './component/Footer';

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
     <Navbar></Navbar>

     <LandingPage></LandingPage>
     <Footer></Footer>
    </div>
  )
}
export default App


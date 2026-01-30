
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Signup } from './component/Signup';
import { Dashboard } from './component/Dashboard';
import { Toaster } from 'react-hot-toast';
import { BoardPage } from './component/BoardPage';
import { Login } from './component/Login';

function App() {
  return (
    <div>
        <Toaster position="top-center" />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/board/:id' element={<BoardPage></BoardPage>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App



import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Signup } from './component/Signup';
import { Dashboard } from './component/Dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
        <Toaster position="top-center" />
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


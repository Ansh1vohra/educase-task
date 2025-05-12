import './App.css'
import { Routes,Route } from 'react-router';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className='h-[100vh] flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Routes, useLocation, useNavigation, useParams } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  
  
  
  return (
    <div className='relative min-h-[100vh] bg-stone-200'>
      
    {
      location.pathname !== '/login' && location.pathname !== '/register' ?   <Navbar /> : null
    }
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        </Route> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
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

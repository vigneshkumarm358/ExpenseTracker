import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Income from './pages/Income'

const App = () => {
  return (
  <div className=" min-h-screen relative bg-stone-200">
    <Navbar />
<div className="px-4 pt-2">
       <Routes>
    
    <Route path='/' element={ <Home /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path='/register' element={ <Register /> } />
    <Route path='/income' element={ <Income /> } />
   </Routes>
</div>
  </div>
  )
}

export default App

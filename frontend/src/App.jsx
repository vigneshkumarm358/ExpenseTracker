import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStart from './components/GetStart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin.jsx';

const App = () => {
  return (
    <div>
     <BrowserRouter>
      
      <Routes>
        <Route path="/" element={ <GetStart />} />
        <Route path='/signin' element={ <Signin />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
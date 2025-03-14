import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext)

  console.log(user);
  
  return (
    <div>
      home
    </div>
  )
}

export default Home

import React, { useContext } from 'react'
import  AuthContext  from '../context/AuthContext'

const Home = () => {

   const {  isAuthorized, navigate } = useContext(AuthContext)
  return (
    <div className='flex items-center justify-center '>
      {
        isAuthorized ? 'ok' : <div className=" border border-gray-700 text-center p-4 lg:py-12 lg:px-6 rounded">
          <h1 className='text-2xl'>Track Your Spending</h1>
          <p className='mt-4'>Easily monitor where your money goes with our intuitive expense tracking feature.</p>
          <p>Create your account to monitor your Spending</p>
          <button onClick={() => navigate('/login')} className=' px-6 py-2 rounded bg-blue-500 cursor-pointer text-white mt-6'>Login Here</button>
        </div>
      }
    </div>
  )
}

export default Home

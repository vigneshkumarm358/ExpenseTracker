import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'

const Transactions = () => {
    const {api} = useContext(AuthContext)

    const getCategory = async () => {
        try {
            const response = await api.get('api/category')
            console.log(response);
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(() => {
        getCategory()
    }, [])
  return (
    <div>ol
      
    </div>
  )
}

export default Transactions

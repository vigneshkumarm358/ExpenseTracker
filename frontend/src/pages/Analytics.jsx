import React, { useContext } from 'react'
import AmountContext from '../context/AmountContext'

const Analytics = () => {

    const { totalIncome, currency, totalTransaction } = useContext(AmountContext)
  return (
    <div>
     <div className="bg-white p-4 rounded">
        <p className=''>Your Current Account Balance :  <span className='text-green-800 ml-2 text-xl'>{currency} {totalIncome - totalTransaction} </span></p>
        <p className=''>Your Total Transaction Amount :  <span className='text-green-800 ml-2 text-xl'>{currency} {totalTransaction} </span></p>
     </div>
    </div>
  )
}

export default Analytics

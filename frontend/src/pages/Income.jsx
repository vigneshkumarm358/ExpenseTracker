import React, {useState, useContext, useEffect} from "react";
import AuthContext from "../context/AuthContext";

const Income = () => {

    const [amount, setAmount] = useState('')
    const [source, setSource] = useState('')
    const [incomeData, setIncomeData] = useState([])
    const { api, currency} = useContext(AuthContext)



    const handleAddIncome = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('api/add-income', {amount, source})
            if (response.status == 201){
              alert('Income added Successfully...')
              getIncomeData()
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

const getIncomeData =  async () => {
  try {
    const response = await api.get('api/add-income')
 
    
    if (response.status === 200){
      setIncomeData(response.data)
      
    }
    
  } catch (error) {
    console.log(error)
  }

}

  useEffect(() => {
  getIncomeData()
  }, [])

  return (
    <div>
      <div className="bg-white p-4 rounded">
        <form onSubmit={handleAddIncome} className="flex flex-col gap-2">
          <h1>Add your Income information</h1>
          <input
            className="py-2 pl-3 rounded border border-gray-700"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="py-2 pl-3 rounded border border-gray-700"
            type="text"
            placeholder="Enter Source (ex: salary)"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <button className="py-2 bg-blue-500 text-white w-full rounded cursor-pointer">
            Add Income
          </button>
        </form>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {
          incomeData.map((item, index) => (
            <div className="bg-white p-4 rounded" key={index}>
              <div className='flex justify-between'>
                <p className="font-bold text-xl" >{currency} {item.amount}.00</p>
              <p>{item.source} </p> 
              </div>
              <p className="mt-1 text-gray-700">{item.date}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Income;

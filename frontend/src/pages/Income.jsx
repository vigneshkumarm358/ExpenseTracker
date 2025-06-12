import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { BsPencilSquare } from "react-icons/bs";

const Income = () => {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [incomeData, setIncomeData] = useState([]);
  const { api, currency } = useContext(AuthContext);
  const [editmode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = async (id) => {
    const editData = incomeData.find((item) => item.id === id);
    console.log(editData);
    setAmount(editData.amount);
    setSource(editData.source);
    setEditId(editData.id);
  };

  const handleAddIncome = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const response = await api.put(`api/edit-income/${editId}`, {amount, source})
        console.log(response);
        
      } else {
        const response = await api.post("api/add-income", { amount, source });
        if (response.status == 201) {
          alert("Income added Successfully...");
          getIncomeData();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getIncomeData = async () => {
    try {
      const response = await api.get("api/add-income");

      if (response.status === 200) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIncomeData();
  }, []);

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
        {incomeData.map((item, index) => (
          <div className="bg-white p-4 rounded" key={index}>
            <div className="flex justify-between">
              <div className="flex items-end gap-2">
                <p className="font-bold text-xl">
                  {currency} {item.amount}.00
                </p>
                -<p>{item.source} </p>
              </div>
              <BsPencilSquare
                onClick={() => handleEdit(item.id)}
                className="text-2xl"
              />
            </div>
            <p className="mt-1 text-gray-700">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Income;

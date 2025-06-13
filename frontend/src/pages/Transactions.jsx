import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { MdClose } from "react-icons/md";

const Transactions = () => {
  const { api, currency } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [transactionsData, setTransactionsData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const getCategory = async () => {
    try {
      const response = await api.get("api/category");
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTransactionsData = async () => {
    try {
      const response = await api.get("api/transactions");
      if (response.status === 200) {
        setTransactionsData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const addTransactions = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("api/transactions", {
        description,
        amount,
        category: selectCategory,
      });
      if (response.status === 201) {
        console.log(response);
        getTransactionsData();
        setDescription("");
        setAmount("");
        setSelectCategory("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const addNewCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("api/category", { name: category });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const delCategory = async (id) => {
    try {
      const response = await api.delete(`api/category-del/${id}`);

      if (response.status === 204) {
        getCategory();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategory();
    getTransactionsData();
  }, []);

  return (
    <div className="relative">
      <form
        className="p-4 bg-white flex flex-col gap-2"
        onSubmit={addTransactions}
      >
        <input
          type="number"
          placeholder="Amount"
          className="border border-gray-700 py-2 pl-3 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border border-gray-700 py-2 pl-3 rounded"
          required
        ></textarea>
        <select
          className="border border-gray-700 py-2 pl-3 rounded"
          value={selectCategory}
          required
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </select>

        <button className=" py-2 bg-blue-500 text-white rounded">
          Add Transaction
        </button>
      </form>
      {showCategory ? (
        <div className="absolute top-0 bg-slate-600 w-full h-screen flex flex-col  items-center gap-6 p-4 ">
          <form
            onSubmit={addNewCategory}
            className="relative p-4 bg-white flex flex-col gap-2 w-full"
          >
            <MdClose
              className="absolute top-2 right-2 cursor-pointer text-xl"
              onClick={() => setShowCategory(!showCategory)}
            />
            <h1>Add New Category</h1>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Category"
              className="border border-gray-700 py-2 pl-3 rounded"
            />
            <button className="cursor-pointer py-2 pl-3 rounded bg-blue-500 text-white">
              Add Category
            </button>
          </form>
          <div className="bg-white p-4 flex flex-col gap-2 w-full">
            {categories.map((item, index) => (
              <div className="flex justify-between gap-8 items-center">
                <p>{item.name}</p>{" "}
                <MdClose
                  onClick={() => delCategory(item.id)}
                  className=" cursor-pointer "
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="bg-blue-300 mt-6 border-l-6 border-blue-700 py-2">
        <p
          className="cursor-pointer pl-2"
          onClick={() => setShowCategory(!showCategory)}
        >
          Click here to add to <span className="">New Category</span>
        </p>
      </div>
      <div className="bg-white mt-4 flex flex-col gap-2 p-2">
        {transactionsData.map((item, index) => (
          <div className="flex flex-col bg-slate-100 p-2" key={index}>
            <div className="flex gap-2">
              <p>
                {currency} {item.amount}
              </p>
              -<p>{item.category}</p>
            </div>

            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

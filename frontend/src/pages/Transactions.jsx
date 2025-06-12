import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Transactions = () => {
  const { api } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    try {
      const response = await api.get("api/category");
      if (response.status === 200) {
        setCategories(["Select Category", ...response.data]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <form className="p-4 bg-white flex flex-col gap-2">
        <input
          type="number"
          placeholder="Amount"
          className="border border-gray-700 py-2 pl-3 rounded"
        />
 
        <textarea name="" id=""  placeholder="Description" className="border border-gray-700 py-2 pl-3 rounded"></textarea>
        <select className="border border-gray-700 py-2 pl-3 rounded">
          {categories.map((item, index) =>
            typeof item === "string" ? (
              <option key={index} disabled selected>
                {item}
              </option>
            ) : (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            )
          )}
        </select>
      </form>
    </div>
  );
};

export default Transactions;

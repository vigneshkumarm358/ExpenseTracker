import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const { api, isAuthorized } = useContext(AuthContext);
  const currency = "₹";
  const [incomeData, setIncomeData] = useState([]);
  const [totalIncome, setTotalIncome] = useState("");
  const [transactionsData, setTransactionsData] = useState([]);
  const [totalTransaction, setTotalTransaction] = useState("");

  const getTotalIncome = () => {
    let total = 0;
    for (let income of incomeData) {
      total += income.amount;
    }
    setTotalIncome(total);
  };

  const getTotalTransaction = () => {
      let total = 0;
    for (let income of transactionsData) {
      total += income.amount;
    }
    setTotalTransaction(total);
  }

  const getIncomeData = async () => {
    try {
      const response = await api.get("api/add-income");
      if (response.status === 200) {
        setIncomeData(response.data);
        getTotalIncome();
      }
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    getTotalIncome();
    getTotalTransaction()
  }, [incomeData, transactionsData]);

  useEffect(() => {
    if (isAuthorized) {
      getIncomeData();
      getTransactionsData();
    }
  }, [isAuthorized]);

  const value = {
    getIncomeData,
    incomeData,
    setIncomeData,
    totalIncome,
    setTotalIncome,
    currency,
    transactionsData,
    setTransactionsData,
    totalTransaction,
    setTotalTransaction,
  };
  return (
    <AmountContext.Provider value={value}>{children}</AmountContext.Provider>
  );
};

export default AmountContext;

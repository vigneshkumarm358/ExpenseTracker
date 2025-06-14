import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const { api, isAuthorized } = useContext(AuthContext);
  const [incomeData, setIncomeData] = useState([]);

  const getIncomeData = async () => {
    try {
      const response = await api.get("api/add-income");
      if (response.status === 200) {
        setIncomeData(response.data);
        console.log(response.data); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      getIncomeData();
    }
  }, [isAuthorized]);

  const value = { getIncomeData, incomeData, setIncomeData };
  return (
    <AmountContext.Provider value={value}>{children}</AmountContext.Provider>
  );
};

export default AmountContext;

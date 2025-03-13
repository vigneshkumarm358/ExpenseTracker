import { Children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = async (e, loginData) => {
    e.preventDefault()
    try{
const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/tokens/`, {
    "method" : 'POST',
    'headers' : {
        'content-Type': 'application/json'
    },
    'body':JSON.stringify(loginData)
})
const data = await response.json()
console.log(data);

setAuthTokens(data)
    }catch(err) {
        console.log(err);
        
    }
   
  };
  const value = {
    navigate,
    handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

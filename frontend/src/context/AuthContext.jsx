import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
      : null
  );

  const handleLogin = async (e, loginData) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/tokens/`,
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setAuthTokens(data);
        setUser(jwtDecode(data.access))

        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const value = {
    navigate,
    handleLogin,
    authTokens,
    user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

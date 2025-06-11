import axios from "axios";
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = '₹'
  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem("REFRESH_TOKEN") ? true : false
  );

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem("REFRESH_TOKEN");
      if (!refresh) throw new Error("No refresh token");

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/token/refresh/`, {
        refresh,
      });

      const newAccess = res.data.access;
      localStorage.setItem("ACCESS_TOKEN", newAccess);
      return newAccess;
    } catch (error) {
      console.error("Refresh token failed", error);
      setIsAuthorized(false);
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("REFRESH_TOKEN");
      navigate("/login");
      return null;
    }
  };

  api.interceptors.request.use(
    async (config) => {
      let token = localStorage.getItem("ACCESS_TOKEN");
      if (token) {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
          token = await refreshToken();
        }

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const value = {
    api,
    navigate,
    isAuthorized,
    setIsAuthorized,
    currency,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

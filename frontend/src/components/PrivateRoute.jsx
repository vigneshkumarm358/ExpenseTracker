import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
    const {navigate, authTokens  } = useContext(AuthContext)
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
   
    

    useEffect(() => {
      if (!authTokens) {
        navigate("/login");
      }
      setIsCheckingAuth(false);
    }, [authTokens, navigate]);

    
    if (isCheckingAuth) {
      return null; 
    }
    return <Outlet />;
};

export default PrivateRoute;

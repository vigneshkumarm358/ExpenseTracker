import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
    const {navigate  } = useContext(AuthContext)
  const [isAuthenticated, setIsAuthenticates] = useState(false);
  return isAuthenticated ? <Outlet /> : navigate('/login') ;
};

export default PrivateRoute;

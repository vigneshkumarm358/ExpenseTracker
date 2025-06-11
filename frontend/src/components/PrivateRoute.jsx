import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const { isAuthorized } = useContext(AuthContext)
    const navigate = useNavigate()
   
    

 if (isAuthorized === null){
  return <p>Loading...</p>
 }
 return isAuthorized ? children : navigate('/login')
};

export default PrivateRoute;

/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Context";

const Private = ({ children }) => {
    // <Navigate to="/login"></Navigate>
//   const {user} = useContext(AuthContext);
  if(localStorage.getItem("what")){
    return children;
  }
  else
//   return children;
return console.log("login")
};

export default Private;
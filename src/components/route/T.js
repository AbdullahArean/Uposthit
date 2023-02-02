/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const T = ({ children }) => {
  if(localStorage.getItem("what")?.slice(0,1) === 'T'){
    return children;
  }
  else 
    return <Navigate to="/profile"></Navigate>
};

export default T;
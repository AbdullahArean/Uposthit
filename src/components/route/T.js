/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  if(localStorage.getItem("what").slice(0,1) === 'T'){
    return children;
  }
  else if (localStorage.getItem("what").slice(0,1) === 'O')
    return <Navigate to="/dashboard"></Navigate>;
  else 
    return <Navigate to="/profile"></Navigate>
};

export default Private;
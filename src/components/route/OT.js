/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const OT = ({ children }) => {
  if(localStorage.getItem("what").slice(0,1) === 'T' || localStorage.getItem("what").slice(0,1) === 'O'){
    return children;
  }
  else 
    return <Navigate to="/profile"></Navigate>
};

export default OT; 
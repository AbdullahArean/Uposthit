/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  if(localStorage.getItem("what").slice(0,1) === 'S'){
    return children;
  }
  else if (localStorage.getItem("what").slice(0,1) === 'T')
    return <Navigate to="/courses"></Navigate>;
  else 
    return <Navigate to="/dashboard"></Navigate>
};

export default Private;
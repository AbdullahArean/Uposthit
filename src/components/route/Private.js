/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Context";

const Private = ({ children }) => {
  if(localStorage.getItem("what")){
    return children;
  }
  else
return <Navigate to="/login"></Navigate>;
};

export default Private;
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("what"));
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default Context;

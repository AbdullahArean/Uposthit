import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Students from "./pages/tables/Students";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Teacher from "./pages/teacher/Teacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/students">
            <Route index element={<Students />} />
            <Route path=":studentId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

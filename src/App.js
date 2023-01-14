import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Students from "./pages/tables/Students";
import Teachers from "./pages/tables/Teachers";
import Officer from "./pages/tables/Officers";
import Courses from "./pages/courses/Courses";
import Semesters from "./pages/semesters/Semesters";
import Lectures from "./pages/lectures/Lectures";
import Attendance from "./pages/attendance/Attendance";
import Archive from "./pages/archive/Archive";
import SemCourses from "./pages/courses/SemCourses";
// import login from "./pages/login/Login.php";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/officers" element={<Officer />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/semesters" element={<Semesters />} />
          <Route path="/courses/:semID" element={<SemCourses />} />
          <Route path="/archive/:courseID" element={<Archive />} />
          <Route path="/courses/:courseID/:semID" element={<Lectures />} />
          <Route
            path="/lectures/:courseID:lectureID:semID/:lecDate"
            element={<Attendance />}
          />
          <Route path="/students">
            <Route index element={<Students />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

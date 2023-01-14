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
import NotFound from "./pages/notfound/NotFound";
import Private from "./components/route/Private";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route
            path="/teachers"
            element={
              <Private>
                <Teachers />
              </Private>
            }
          />
          <Route
            path="/officers"
            element={
              <Private>
                <Officer />
              </Private>
            }
          />
          <Route
            path="/courses"
            element={
              <Private>
                <Courses />
              </Private>
            }
          />
          <Route
            path="/semesters"
            element={
              <Private>
                <Semesters />
              </Private>
            }
          />
          <Route
            path="/courses/:semID"
            element={
              <Private>
                <SemCourses />
              </Private>
            }
          />
          <Route
            path="/archive/:courseID"
            element={
              <Private>
                <Archive />
              </Private>
            }
          />
          <Route
            path="/courses/:courseID/:semID"
            element={
              <Private>
                <Lectures />
              </Private>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/lectures/:courseID:lectureID:semID/:lecDate"
            element={
              <Private>
                <Attendance />
              </Private>
            }
          />
          <Route path="/students">
            <Route
              index
              element={
                <Private>
                  <Students />
                </Private>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

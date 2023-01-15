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
import Home from "./pages/home/HomePage";
import Archive from "./pages/archive/Archive";
import SemCourses from "./pages/courses/SemCourses";
import NotFound from "./pages/notfound/NotFound";
import Private from "./components/route/Private";
import O from "./components/route/O";
import T from "./components/route/T";
import OT from "./components/route/OT";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Private>
                <O>
                  <Dashboard />
                </O>
              </Private>
            }
          />
          <Route
            path="home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="/teachers"
            element={
              <Private>
                <O>
                  <Teachers />
                </O>
              </Private>
            }
          />
          <Route
            path="/officers"
            element={
              <Private>
                <O>
                  <Officer />
                </O>
              </Private>
            }
          />
          <Route
            path="/courses"
            element={
              <Private>
                <OT>
                  <Courses />
                </OT>
              </Private>
            }
          />
          <Route
            path="/semesters"
            element={
              <Private>
                <OT>
                  <Semesters />
                </OT>
              </Private>
            }
          />
          <Route
            path="/courses/:semID"
            element={
              <Private>
                <OT>
                  <SemCourses />
                </OT>
              </Private>
            }
          />
          <Route
            path="/archive/:courseID"
            element={
              <Private>
                <T>
                  <Archive />
                </T>
              </Private>
            }
          />
          <Route
            path="/courses/:courseID/:semID"
            element={
              <Private>
                <T>
                  <Lectures />
                </T>
              </Private>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/lectures/:courseID/:lectureID/:semID/:lecDate"
            element={
              <Private>
                <T>
                  <Attendance />
                </T>
              </Private>
            }
          />
          <Route
            path="/students"
            element={
              <Private>
                <OT>
                  <Students />
                </OT>
              </Private>
            }
          />
          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

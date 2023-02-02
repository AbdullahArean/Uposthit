import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "rsuite/Nav";
import "rsuite/dist/rsuite.css";

const Navbar = ({ active, onSelect, ...props }) => {
  const nav = useNavigate();
  const [O, setO] = useState(false);
  const [T, setT] = useState(false);
  const [S, setS] = useState(false);
  const who = () => {
    if (localStorage.getItem("what")?.slice(0, 1) === "O") {
      setO(true);
    } else if (localStorage.getItem("what")?.slice(0, 1) === "T") {
      setT(true);
    } else if (localStorage.getItem("what")?.slice(0, 1) === "S") {
      setS(true);
    }
  };
  const logOut = () => {
    localStorage.removeItem("what");
    nav("/login");
  };
  useEffect(() => {
    who();
  }, []);
  return (
    <div className="flex justify-between">
      <div></div>
      <Nav
        {...props}
        activeKey={active}
        onSelect={onSelect}
        style={{ paddingTop: 5, paddingBottom: 5, marginBottom: 20 }}
      >
        <Nav.Item onSelect={() => nav("/home")} eventKey="home">Home</Nav.Item>
        {O === true ? <Nav.Item onSelect={() => nav("/dashboard")} eventKey="dashboard">Dashboard</Nav.Item> : ""}
        {S === true ? (
          <Nav.Item onSelect={() => nav("/stat")} eventKey="viewAttendance">View Attendance</Nav.Item>
        ) : (
          ""
        )}
        {O === true ? (
          <Nav.Menu title="Lists" >
            <Nav.Item onSelect={() => nav("/students")} eventKey="students">Students</Nav.Item>
            <Nav.Item onSelect={() => nav("/teachers")} eventKey="teachers">Teachers</Nav.Item>
            <Nav.Item onSelect={() => nav("/officers")} eventKey="officers">Officers</Nav.Item>
          </Nav.Menu>
        ) : (
          ""
        )}
        {T === true ? (
          <Nav.Item onSelect={() => nav("/courses")} eventKey="courses">
            My Courses
          </Nav.Item>
        ) : (
          ""
        )}
        {T === true ? (
          <Nav.Item onSelect={() => nav("/semesters")} eventKey="semesters">
            Semesters
          </Nav.Item>
        ) : (
          ""
        )}
        {/*<Nav.Menu title="Support">
          <Nav.Item eventKey="help">Help</Nav.Item>
          <Nav.Item eventKey="about">About</Nav.Item>
        </Nav.Menu>*/}
        <Nav.Item onSelect={() => nav("/profile")} eventKey="profile">Profile</Nav.Item>
        <Nav.Item onSelect={() => logOut()} eventKey="logout">Logout</Nav.Item>
      </Nav>
      <div></div>
    </div>
  );
};

export default Navbar;

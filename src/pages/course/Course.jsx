/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import { useEffect } from "react";

const Course = () => {
    let location = useLocation();
    let id = location.pathname.slice(-1);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        Course page for course with id : {id}
      </div>
    </div>
  );
};

export default Course;
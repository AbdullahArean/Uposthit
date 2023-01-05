/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Attendance = () => {
  let { attendanceID } = useParams();
  useEffect(() => {
    // console.log(attendanceID);
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        {attendanceID}
      </div>
    </div>
  );
};

export default Attendance;

/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Attendance = () => {
  let { attendanceID } = useParams();
  let { semID } = useParams();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const getstudents = () => {
    if (loading) {
      axios.get("/?getstudents&semester_id=" + semID).then((response) => {
        setStudents(response.data);
        console.log(response.data);
        setLoading(false);
      });
    }
  };


  useEffect(() => {
    getstudents();
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

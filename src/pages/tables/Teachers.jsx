import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Axios from "axios";

const Teacher = () => {

  const [data, setData] = useState([]);
  const getTeacher = () => {
    Axios.get("/?getallteachers")
      .then((response) => {
        setData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTeacher();
  }, []);


  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        Teacher
      </div>
    </div>
  );
};

export default Teacher;
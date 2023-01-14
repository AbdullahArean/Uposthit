/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";


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

  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: "t_name", headerName: "Name", width: 200 },
    { field: "id", headerName: "T_Code", width: 170 },
    { field: "t_des", headerName: "Designation", width: 250 },
    { field: "t_contact", headerName: "Mobile No.", width:170 },
    { field: "t_email", headerName: "E-mail", width: 250 },
    { field: "t_dept", headerName: "Department", width: 400 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          All Teachers
        </div>
        <div className="px-7 my-12" style={{ height: 650, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
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
    console.log(data)
  }, []);

  const rows: GridRowsProp = data;

  const columns: GridColDef[] = [
    { field: "t_name", headerName: "Name", width: 200 },
    { field: "t_code", headerName: "T_Code", width: 170 },
    { field: "t_designation", headerName: "Designation", width: 250 },
    { field: "t_contact", headerName: "Mobile No.", width:170 },
    { field: "t_email", headerName: "E-mail", width: 150 },
    { field: "t_deptname", headerName: "Department", width: 400 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        {/* <DataTable data={data}/> */}
        <div className="px-7" style={{ height: 650, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
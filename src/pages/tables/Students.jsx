import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import Axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Students = () => {
  const [data, setData] = useState([]);
  const getStudent = () => {
    Axios.get("/?getallstudents")
      .then((response) => {
        setData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStudent();
  }, []);

  const rows: GridRowsProp = data;

  const columns: GridColDef[] = [
    { field: "s_name", headerName: "Name", width: 200 },
    { field: "reg", headerName: "Registration No.", width: 150 },
    { field: "class_roll", headerName: "Roll", width: 70 },
    { field: "semester_id", headerName: "Current Semester", width: 150 },
    { field: "p_contact", headerName: "Primary Contact", width: 150 },
    { field: "e_contact", headerName: "Emergency Contact", width: 150 },
    { field: "p_email", headerName: "Primary Mail", width: 250 },
    { field: "e_email", headerName: "Emergency Mail", width: 250 },
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

export default Students;

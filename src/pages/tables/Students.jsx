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
    { field: "id", headerName: "Registration No.", width: 150 },
    { field: "s_classroll", headerName: "Roll", width: 70 },
    { field: "s_contact", headerName: "Primary Contact", width: 150 },
    { field: "s_contact2", headerName: "Emergency Contact", width: 150 },
    { field: "s_email", headerName: "Primary Mail", width: 250 },
    { field: "s_email2", headerName: "Emergency Mail", width: 250 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        {/* <DataTable data={data}/> */}
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          All Students
        </div>
        <div className="px-7 my-12" style={{ height: 650, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Students;

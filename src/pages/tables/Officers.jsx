/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";


const Officer = () => {

  const [data, setData] = useState([]);
  const getOfficer = () => {
    Axios.get("/?getallofficers")
      .then((response) => {
        setData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOfficer();
  }, []);
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: "o_name", headerName: "Name", width: 200 },
    { field: "id", headerName: "O_Code", width: 170 },
    { field: "o_des", headerName: "Designation", width: 250 },
    { field: "o_contact", headerName: "Mobile No.", width:170 },
    { field: "o_email", headerName: "E-mail", width: 250 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          All Officers
        </div>
        <div className="px-7 my-12" style={{ height: 650, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Officer;
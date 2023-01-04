import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="flex justify-center items-center">
          <div className="widgets grid lg:grid-cols-5 gap-8 md:grid-cols-1 mt-10">
            <Widget type="students" />
            <Widget type="teachers" />
            <Widget type="officers" />
            <Widget type="courses" />
            <Widget type="semesters" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

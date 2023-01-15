/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const getStat = () => {
    const id = localStorage.getItem("what");
    axios
      .post("/?getstudentstat&s_reg=" + id, {
        s_reg: id,
      })
      .then((response) => {
        setUserInfo(response?.data);
        setName(response.data[0].s_name);
        setRoll(response.data[0].s_classroll);
        console.log(response.data);
      });
  };
  useEffect(() => {
    getStat();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          Name: {name}, Roll: {roll}
        </div>
        <div className="grid grid-cols-3 gap-10 mx-7 my-12">
          {userInfo.map((s, i) => {
            return (
              <div
                key={i}
                className="px-4 rounded-lg border flex flex-col justify-between border-gray-300 shadow-lg shadow-hblue py-2"
              >
                <div>
                  <div className="text-left text-gray-500 text-2xl mt-2 mb-4 px-1 uppercase">
                    {s.c_name}
                  </div>
                  <div className="text-gray-600 text-lg pl-1">
                    Code : {s.c_code}
                  </div>
                  <div className="text-gray-600 text-lg pl-1">
                    Credits : {s.c_credit}
                  </div>
                  <div className="text-gray-600 text-lg pl-1 mt-4">
                    Attendance : {s.Percentage}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;

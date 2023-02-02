/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("semesters");
  const nav = useNavigate();

  const courses = (id) => {
    nav(`/courses/${id}`);
  };

  const getSemester = () => {
    Axios.get("/?getAllsemester")
      .then((response) => {
        setData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSemester();
  }, []);

  return (
    <div className="homeContainer flex-1">
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
      <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
        All Semesters
      </div>
      <div className="grid grid-cols-3 gap-10 mx-7 my-12">
        {data.map((sem) => {
          return (
            <div
              key={sem.sem_id}
              className="px-4 rounded-lg border flex flex-col justify-between border-gray-300 shadow-lg shadow-hblue py-2"
            >
              <div>
                <div className="text-left text-gray-500 text-2xl mt-2 mb-4 px-1 uppercase">
                  {sem.sem_name}
                </div>
                <div className="text-gray-600 text-lg pl-1">
                  Code : {sem.sem_code}
                </div>
                <div className="text-gray-600 text-lg pl-1">
                  Year : {sem.sem_year}
                </div>
              </div>
              <div className="bottom flex flex-col rounded-lg  justify-center items-center mt-6">
                <button
                  className="text-xl w-full text-center bg-hblue mb-4 flex justify-center items-center rounded-lg py-2 px-6"
                  onClick={() => courses(sem.sem_id)}
                >
                  Open
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

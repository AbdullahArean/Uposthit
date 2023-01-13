/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SemCourses = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const nav = useNavigate();
  let { semID } = useParams();


  const lectures = (id, sId) => {
    nav(`/courses/${id}/${sId}`);
  };

  const viewAttendance = (courseID) => {
    nav(`/archive/${courseID}`);
  };

  const getCourse = () => {
    Axios.get("/?getcourse&sem_id=" + semID)
      .then((response) => {
        setData(response?.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          Courses
        </div>
        <div className="grid grid-cols-3 gap-10 mx-7 my-12">
          {data.map((course) => {
            return (
              <div
                key={course.c_code}
                className="px-4 rounded-lg border flex flex-col justify-between border-gray-300 shadow-lg shadow-hblue py-2"
              >
                <div>
                  <div className="text-left text-gray-500 text-2xl mt-2 mb-4 px-1 uppercase">
                    {course.c_name}
                  </div>
                  <div className="text-gray-600 text-lg pl-1">
                    Code : {course.c_code}
                  </div>
                  <div className="text-gray-600 text-lg pl-1">
                    Credits : {course.c_credit}
                  </div>
                </div>
                <div className="bottom flex flex-col rounded-lg  justify-center items-center mt-6">
                  <button
                    className="text-xl w-full text-center bg-hblue mb-4 flex justify-center items-center rounded-lg py-2 px-6"
                    onClick={() => lectures(course.c_code, course.sem_id)}
                  >
                    Open
                  </button>
                  <button
                    className="text-md w-full text-center text-white mb-2 bg-gray-600 flex justify-center items-center rounded-lg py-2 px-6"
                    onClick={() => viewAttendance(course.c_code)}
                  >
                    View attendance
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SemCourses;

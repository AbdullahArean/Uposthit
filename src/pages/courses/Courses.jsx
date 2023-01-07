/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const singleCourse = (id, sId) => {
    nav(`/courses/${id}/${sId}`);
  };

  const viewAttendance = (courseID) => {
    nav(`/archive/${courseID}`);
  };

  const getCourse = () => {
    Axios.get("/?getAllcourse")
      .then((response) => {
        setData(response?.data);
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
          All Courses
        </div>
        <div className="grid grid-cols-5 gap-10 mx-7 my-12">
          {data.map((course) => {
            return (
              <div
                key={course.course_id}
                className="px-4 rounded-lg border border-gray-300 shadow-lg shadow-hblue py-2"
              >
                <div>
                  <div className="text-left text-gray-500 text-4xl mb-4 px-1 uppercase">
                    {course.course_name}
                  </div>
                  <div className="text-gray-600 text-lg pl-1">
                    Code : {course.course_code}
                  </div>
                  <div className="text-gray-600 text-lg pl-1">
                    Credits : {course.course_credit}
                  </div>
                </div>
                <div className="bottom flex flex-col rounded-lg  justify-center items-center mt-6">
                  <button
                    className="text-xl w-full text-center bg-hblue mb-4 flex justify-center items-center rounded-lg py-2 px-6"
                    onClick={() => singleCourse(course.course_id, course.semester_id)}
                  >
                    Open
                  </button>
                  <button
                    className="text-md w-full text-center text-white bg-gray-600 flex justify-center items-center rounded-lg py-2 px-6"
                    onClick={() => viewAttendance(course.course_id)}
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

export default Courses;

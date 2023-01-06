/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Attendance = () => {
  let { lectureID } = useParams();
  let { courseID } = useParams();
  let { lecDate } = useParams();
  let { semID } = useParams();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [present, setPresent] = useState([]);

  let isPresent = 0;

  const submitAttendance = () => {};

  const takeAttendance = (e, s_id) => {
    if (e.target.checked) {
      isPresent = 1;
      setPresent((array) => [...array, s_id]);
    } else {
      isPresent = 0;
      setPresent(present.filter((item) => item !== s_id));
    }
  };

  const getstudents = () => {
    if (loading) {
      axios.get("/?getstudents&semester_id=" + semID).then((response) => {
        setStudents(response.data);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    getstudents();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          Set Attendance
        </div>
        <div className="px-7 my-12">
          {students.map((students) => {
            return (
              <div
                key={students.s_id}
                className="flex justify-between px-12 shadow-xl rounded-lg py-6 border border-gray-300 my-6 shadow-hblue"
              >
                <div className="flex gap-12">
                  <div className="text-xl">{students.class_roll}</div>
                  <div className="text-xl">{students.s_name}</div>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    id="teal-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                    onChange={(e) => takeAttendance(e, students.s_id)}
                  />
                  <label
                    htmlFor="teal-checkbox"
                    className="ml-2 text-lg font-medium text-gray-900"
                  >
                    Present
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            id="a_submit"
            onClick={() => submitAttendance}
            type="button"
            className="col-start-3 text-black hover:scale-105 duration-300 transition-all bg-white border-2 border-black hover:bg-teal-400 hover:text-white focus:outline-none font-medium rounded-lg text-2xl px-12 py-4 text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Attendance = () => {
  let { lectureID } = useParams();
  let { courseID } = useParams();
  let { semID } = useParams();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [present, setPresent] = useState([]);
  const [info, setInfo] = useState([]);
  const nav = useNavigate();

  let isPresent = 0;

  const goToLecture = (id, sId) => {
    nav(`/courses/${id}/${sId}`)
  }

  const updateAttendance = () => {
    for (var i = 0; i < present.length; i++) {
      axios.post("/?updateattendance", {
        s_reg: present[i],
        l_id: lectureID
      });
    }
    toast.success("Attendance Saved Successfully!");
  };

  const submitAttendance = () => {
    loadAttendance().then(() => updateAttendance()).then(() => goToLecture(courseID, semID));
  };

  const loadAttendance = async () => {
    for (var i = 0; i < students.length; i++) {
      axios.post("/?insertattendance", {
        s_reg: students[i].s_reg,
        l_id: lectureID,
        presence: 0,
      });
    }
  };

  const takeAttendance = (e, s_reg) => {
    if (e.target.checked) {
      isPresent = 1;
      setPresent((array) => [...array, s_reg]);
    } else {
      isPresent = 0;
      setPresent(present.filter((item) => item !== s_reg));
    }
  };

const loadinfo = (s_reg) => {
  s_reg.map((reg) => {
    if (loading) {
      axios.get("/?getstudentsforattendance&s_reg=" + reg).then((response) => {
        setInfo(response.data);
        setLoading(false);
      });
    }
  })
}



  const getstudents = async () => {
    if (loading) {
      axios.get("/?getstudents&sem_id=" + semID).then((response) => {
        setStudents(response.data);
      });
    }
  };


  useEffect(() => {
    getstudents().then(() => loadinfo(students));
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <ToastContainer position="top-right" pauseOnHover draggable />
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          Set Attendance
        </div>
        <div className="px-7 my-12">
          {info.map((student) => {
            return (
              <div
                key={student.s_reg}
                className="flex justify-between px-12 shadow-xl rounded-lg py-6 border border-gray-300 my-6 shadow-hblue"
              >
                <div className="flex gap-12">
                  <div className="text-xl">{student.s_classroll}</div>
                  <div className="text-xl">{student.s_name}</div>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    id="teal-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                    onChange={(e) => takeAttendance(e, student.s_reg)}
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
            onClick={submitAttendance}
            type="button"
            className="col-start-3 mb-8 text-black hover:scale-105 duration-300 transition-all bg-white border-2 border-black hover:bg-teal-400 hover:text-white focus:outline-none font-medium rounded-lg text-2xl px-12 py-4 text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Fade from "@mui/material/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";

const Attendance = () => {
  let { lectureID } = useParams();
  let { courseID } = useParams();
  let { semID } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [present, setPresent] = useState([]);
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);
  const [info, setInfo] = useState([]);
  const nav = useNavigate();

  let isPresent = 0;

  const updateAttendance = async () => {
    for (var i = 0; i < present.length; i++) {
      axios
        .post("/?updateattendance", {
          s_reg: present[i],
          l_id: lectureID,
        })
        .then((response) => {
          if (response.data === 1) {
            nav(`/courses/${courseID}/${semID}`, {
              state: true,
            });
          } else {
            toast.error("Attendance Wasn't Saved!");
          }
        });
    }
  };

  const submitAttendance = async () => {
    loadAttendance().then(() => updateAttendance());
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
      setPresent((present) => [...present, s_reg]);
    } else {
      isPresent = 0;
      setPresent(present.filter((item) => item !== s_reg));
    }
  };

  const getstudents = async () => {
    if (loading) {
      axios.get("/?getstudents&sem_id=" + semID).then((response) => {
        setStudents(response.data);
      });
    }
  };

  useEffect(() => {
    getstudents();
    console.log(courseID)
  }, []);
  return (
    <div className="flex relative">
      <Sidebar className="absolute top-0 left-0" />
      <div className="homeContainer flex-1">
        <ToastContainer position="top-right" pauseOnHover draggable />
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          Set Attendance
        </div>
        <div className="mx-7 my-12 rounded-none shadow-xl shadow-hblue">
          {students.map((student) => {
            return (
              <div
                key={student.s_reg}
                className="flex justify-between px-12 rounded-none py-2 border border-gray-200 my-0"
              >
                <div className="flex gap-12">
                  <div className="text-xl w-6 text-center">
                    {student.s_classroll}
                  </div>
                  <div className="text-xl">{student.s_name}</div>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    id="teal-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-teal-600 focus:ring-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
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
            onClick={handleOpen}
            type="button"
            className="col-start-3 mb-8 text-black hover:scale-105 duration-300 transition-all bg-white border-2 border-black hover:bg-teal-400 hover:text-white focus:outline-none font-medium rounded-lg text-2xl px-12 py-4 text-center"
          >
            Submit
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className="modal relative -translate-1/2 border rounded-xl shadow-xl bg-white p-12">
                <button
                  id="close"
                  className="absolute top-5 right-5"
                  onClick={handleClose}
                >
                  <CgClose />
                </button>
                <div id="transition-modal-description">
                  <div className="">
                    <div className="text-3xl mb-6">
                      Are you sure you want to submit?
                    </div>
                    <div className="flex w-full justify-center gap-12">
                      <button
                        onClick={() => submitAttendance()}
                        className="px-4 py-3 rounded-lg bg-green-500 text-xl text-white"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={handleClose}
                        className="px-4 py-3 rounded-lg bg-red-700 text-xl text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

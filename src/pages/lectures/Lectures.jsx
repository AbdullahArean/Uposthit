/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LectureForm from "../../components/form/LectureForm";
import axios from "axios";

const Course = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(true);
  const [lectures, setLectures] = useState([]);
  let { courseID } = useParams();
  let { semID } = useParams();

  const nav = useNavigate();
  const takeAttendance = (lecID,semID,lecDate) => {
    nav(`/lectures/${courseID}${lecID}${semID}/${lecDate}`);
  };

  const getlecture = () => {
    if (loading) {
      axios.get("/?getlecture&course_id=" + courseID).then((response) => {
        setLectures(response.data);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    getlecture();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="text-5xl text-center font-bold uppercase mt-8 text-gray-600">
          All Lectures
        </div>
        <div className="mx-7 my-12 flex flex-col gap-y-8">
          {lectures.map((lecture) => {
            return (
              <button
                onClick={() => takeAttendance(lecture.lecture_id,semID,lecture.lecture_date)}
                key={lecture.lecture_id}
                className="flex gap-16 shadow-lg shadow-hblue border border-gray-300 rounded-lg py-8 px-12 align-middle"
              >
                <div className="text-2xl bg-hblue px-2 rounded-md">
                  {lecture.lecture_id}
                </div>
                <div className="flex w-full justify-between">
                  <div className="text-2xl">{lecture.lecture_topic}</div>
                  <div className="flex gap-8 font-medium align-middle">
                    <div>{lecture.lecture_date}</div>
                    <div>{lecture.lecture_time}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <button
          className="text-5xl bg-hblue px-8 py-5 fixed right-20 bottom-20 rounded-full shadow-lg"
          onClick={handleOpen}
        >
          +
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
              <div id="transition-modal-description">{<LectureForm />}</div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Course;

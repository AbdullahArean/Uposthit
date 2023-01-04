/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LectureForm from "../../components/form/LectureForm";

const Course = () => {
  let location = useLocation();
  let arr = location.pathname.split("courses/");
  let id = arr[arr.length - 1];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
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
        Course page for course with id : {id}
      </div>
    </div>
  );
};

export default Course;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Widget.css";
import { HiUserAdd } from "react-icons/hi";
// import { SiCoderwall } from "react-icons/si";
import { MdAddBox } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import SForm from "../form/SForm";
import OForm from "../form/OForm";
import TForm from "../form/TForm";
import CForm from "../form/CForm";
import SemForm from "../form/SemForm";

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "students":
      data = {
        title: "STUDENTS",
        counter: "Null",
        link: "All Students",
        icon: <HiUserAdd className="" />,
        isStudent: true,
      };
      break;
    case "teachers":
      data = {
        title: "TEACHERS",
        counter: "Null",
        link: "All Teachers",
        icon: <HiUserAdd className="" />,
        isTeacher: true,
      };
      break;
    case "officers":
      data = {
        title: "OFFICERS",
        counter: "Null",
        link: "All Officers",
        icon: <HiUserAdd className="" />,
        isOfficer: true,
      };
      break;
    case "courses":
      data = {
        title: "COURSES",
        counter: "Null",
        link: "All Courses",
        icon: <MdAddBox className="" />,
        isCourse: true,
      };
      break;
    case "semesters":
      data = {
        title: "SEMESTERS",
        counter: "Null",
        link: "All Semesters",
        icon: <MdAddBox className="" />,
        isSemester: true,
      };
      break;
    default:
      break;
  }

  const nav = useNavigate();

  const toPage = () => {
    nav(`/${data.title.toLowerCase()}`)
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="widget flex flex-col gap-y-10 flex-1 border rounded-lg shadow-lg">
      <div className="top gap-y-2 flex flex-col mx-4">
        <button type="button" onClick={toPage} className="title text-left text-gray-500 mt-3 text-3xl px-1 py-0.5">
          {data.title}
        </button>
        <div className="counter text-gray-600 text-lg p-1">
          Total : {data.counter}
        </div>
      </div>
      <div className="bottom w-full flex flex-col justify-center items-center mr-4">
        <div className="corner text-lg mt-4 ">{/*<SiCoderwall />*/}</div>
        <div>
          
          <button
            className="text-xl mb-4 flex items-center bg-hblue rounded-lg py-2 px-8"
            onClick={handleOpen}
          >
            {data.icon} <span className="mr-2"></span> Add{" "}
            {data.title.toLowerCase()}
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
                  {data.isStudent ? (
                    <SForm />
                  ) : data.isTeacher ? (
                    <TForm />
                  ) : data.isOfficer ? (
                    <OForm />
                  ) : data.isCourse ? (
                    <CForm />
                  ) : data.isSemester ? (
                    <SemForm />
                  ) : (
                    "undefined"
                  )}
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Widget;

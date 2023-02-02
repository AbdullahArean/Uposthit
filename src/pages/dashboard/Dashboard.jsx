/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { MdAddBox } from "react-icons/md";
import AForm from "../../components/form/AForm";
import EForm from "../../components/form/EForm";
import IForm from "../../components/form/IForm";
import { AuthContext } from "../../components/context/Context";
// import { AuthContext } from " ../../components/context/Context.jsx";
// src\components\context\Context.jsx

const Dashboard = () => {
  const [tData, setTData] = useState([]);
  const [cData, setCData] = useState([]);
  const [sData, setSData] = useState([]);
  const [oData, setOData] = useState([]);
  const [semesterData, setsemesterData] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opens2, setOpens2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpens = () => setOpens(true);
  const handleOpens2 = () => setOpens2(true);
  const handleClose = () => setOpen(false);
  const handleCloses = () => setOpens(false);
  const handleCloses2 = () => setOpens2(false);
  // const {user} = useContext(AuthContext);

  const getSemester = () => {
    if (loading) {
      Axios.get("/?getAllsemester")
        .then((response) => {
          setsemesterData(response?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getStudent = () => {
    if (loading) {
      Axios.get("/?getallstudents")
        .then((response) => {
          setSData(response?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getTeacher = () => {
    if (loading) {
      Axios.get("/?getallteachers")
        .then((response) => {
          setTData(response?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getCourse = () => {
    if (loading) {
      Axios.get("/?getAllcourse")
        .then((response) => {
          setCData(response?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getOfficer = () => {
    Axios.get("/?getallofficers")
      .then((response) => {
        setOData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTeacher();
    getCourse();
    getStudent();
    getSemester();
    getOfficer();
  }, []);
  return (
    <div className="homeContainer flex-1">
      <Navbar appearance="subtle" />
      <div className="flex justify-center items-center">
        <div className="widgets grid lg:grid-cols-4 mx-8 gap-8 md:grid-cols-2 mt-10">
          <Widget type="students" student={sData.length} />
          <Widget type="teachers" teacher={tData.length} />
          <Widget type="officers" officer={oData.length} />
          <Widget type="courses" course={cData.length} />
          <Widget type="semesters" semester={semesterData.length} />
          <div className="widget flex flex-col gap-y-10 px-4 py-3 border shadow-hblue rounded-lg shadow-lg">
            <div className="top gap-y-2 flex flex-col ">
              <div className="title text-center text-gray-500 text-3xl px-1">
                ASSIGN TEACHERS
                <br />
                TO COURSES
              </div>
              <div className="counter text-gray-600 text-lg p-1"></div>
            </div>
            <div className="bottom w-full flex flex-col rounded-lg bg-hblue justify-center items-center">
              <div>
                <button
                  className="text-xl flex items-center align-middle rounded-lg py-2 px-6"
                  onClick={handleOpen}
                >
                  <MdAddBox /> <span className="mr-2"></span> Assign courses
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
                        <AForm
                          teacher={tData}
                          loading={loading}
                          course={cData}
                        />
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
          <div className="widget flex flex-col gap-y-10 px-4 py-3 border shadow-hblue rounded-lg shadow-lg">
            <div className="top gap-y-2 flex flex-col ">
              <div className="title text-center text-gray-500 text-3xl px-1">
                ENROLL STUDENTS
                <br /> TO SEMESTERS
              </div>
              <div className="counter text-gray-600 text-lg p-1"></div>
            </div>
            <div className="bottom w-full flex flex-col rounded-lg bg-hblue justify-center items-center">
              <div>
                <button
                  className="text-xl flex items-center align-middle rounded-lg py-2 px-6"
                  onClick={handleOpens}
                >
                  <MdAddBox /> <span className="mr-2"></span> Assign Semesters
                </button>
                <Modal
                  aria-labelledby="transition-modal-title1"
                  aria-describedby="transition-modal-description1"
                  open={opens}
                  onClose={handleCloses}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={opens}>
                    <div className="modal relative -translate-1/2 border rounded-xl shadow-xl bg-white p-12">
                      <button
                        id="close"
                        className="absolute top-5 right-5"
                        onClick={handleCloses}
                      >
                        <CgClose />
                      </button>
                      <div id="transition-modal-description1">
                        <EForm
                          student={sData}
                          loading={loading}
                          semester={semesterData}
                        />
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
          <div className="widget flex flex-col gap-y-10 px-4 py-3 border shadow-hblue rounded-lg shadow-lg">
            <div className="top gap-y-2 flex flex-col ">
              <div className="title text-left text-gray-500 text-3xl px-1">
                INSERT USERS
              </div>
              <div className="counter text-gray-600 text-lg p-1"></div>
            </div>
            <div className="bottom w-full flex flex-col rounded-lg bg-hblue justify-center items-center">
              <div>
                <button
                  className="text-xl flex items-center align-middle rounded-lg py-2 px-6"
                  onClick={handleOpens2}
                >
                  <MdAddBox /> <span className="mr-2"></span> Insert User
                </button>
                <Modal
                  aria-labelledby="transition-modal-title2"
                  aria-describedby="transition-modal-description2"
                  open={opens2}
                  onClose={handleCloses2}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={opens2}>
                    <div className="modal relative -translate-1/2 border rounded-xl shadow-xl bg-white p-12">
                      <button
                        id="close"
                        className="absolute top-5 right-5"
                        onClick={handleCloses2}
                      >
                        <CgClose />
                      </button>
                      <div id="transition-modal-description2">
                        <IForm />
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

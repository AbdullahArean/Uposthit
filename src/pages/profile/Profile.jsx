/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Fade from "@mui/material/Fade";
import { CgClose } from "react-icons/cg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import CPForm from "../../components/form/CPForm";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [active, setActive] = useState("profile");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getUser = () => {
    const id = localStorage.getItem("what");
    axios
      .post("/?getuser&id=" + id, {
        id: id,
      })
      .then((response) => {
        setUserInfo(response?.data);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="homeContainer flex-1">
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
      <hr className="mx-2 mb-3" />
      {userInfo.map((user, i) => {
        return (
          <div key={i} className="widgets flex flex-col text-center ml-7 my-7">
            <div className="text-5xl mt-4 font-bold p-12">
              Welcome {user.name}
            </div>
            <div className="text-xl mt-2 font-bold px-4 py-2">
              ID: {user.id}
            </div>
            <div className="text-xl mt-2 font-bold px-4 py-2">
              Email: {user.email}
            </div>
            <div className="text-center mt-16">
              <button
                id="a_submit"
                onClick={handleOpen}
                type="button"
                className="col-start-3 mb-8 text-black hover:scale-105 duration-300 transition-all bg-white border-2 border-black hover:bg-teal-400 hover:text-white focus:outline-none font-medium rounded-lg text-2xl px-12 py-4 text-center"
              >
                Change Password
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
                      <CPForm />
                    </div>
                  </div>
                </Fade>
              </Modal>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  MdTimeline,
  MdDashboard,
  MdHelpOutline,
  MdInfoOutline,
} from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaUserShield,
} from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { BsArchive, BsPersonCircle } from "react-icons/bs";

const Sidebar = () => {
  const Nav = useNavigate();
  const [O, setO] = useState(false);
  const [T, setT] = useState(false);
  const [S, setS] = useState(false);
  const [OT, setOT] = useState(false);
  const who = () => {
    if (localStorage.getItem("what").slice(0, 1) === "O") {
      setO(true);
      setOT(true);
    } else if (localStorage.getItem("what").slice(0, 1) === "T") {
      setT(true);
      setOT(true);
    } else if (localStorage.getItem("what").slice(0, 1) === "S") {
      setS(true);
    }
  };
  const logOut = () => {
    localStorage.removeItem("what");
    Nav("/login");
  };
  useEffect(() => {
    who();
  }, []);
  return (
    <div>
      <div className="flex-initial border-r h-screen relative bg-white text-black shadow-xl">
        <div className="top flex h-12 items-center justify-center">
          <Link
            to="/home"
            className="logo text-black text-2xl font-black font-dancing-script "
          >
            UPOSTHIT
          </Link>
        </div>
        <hr className="mb-3 mx-2" />
        <div className="center px-2">
          <ul className="list-none m-0 p-0">
            {O === true ? (
              <div>
                <li className="text-gray-400 pl-2 pt-3 text-sm">
                  <span>MAIN</span>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="flex gap-2 items-center pr-12 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
                  >
                    <MdDashboard className="text-black text-2xl" />
                    <span className="text-gray-600">Dashboard</span>
                  </Link>
                </li>
              </div>
            ) : (
              ""
            )}
            {T === true ? (
              <div>
                <li className="text-gray-400 pl-2 pt-6 text-sm">
                  <span>LISTS</span>
                </li>
                <li>
                  <Link
                    to="/students"
                    className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
                  >
                    <FaBookReader className="text-black text-2xl" />
                    <span className="text-gray-600">Students</span>
                  </Link>
                </li>
              </div>
            ) : (
              ""
            )}

            {O === true ? (
              <div>
                <li>
                  <Link
                    to="/teachers"
                    className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
                  >
                    <FaChalkboardTeacher className="text-black text-2xl" />
                    <span className="text-gray-600">Teachers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/officers"
                    className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
                  >
                    <FaUserShield className="text-black text-2xl" />
                    <span className="text-gray-600">Officers</span>
                  </Link>
                </li>
              </div>
            ) : (
              ""
            )}
            {OT === true ? (
              <div>
                <li className="text-gray-400 pl-2 pt-6 text-sm">
                  <span>PROGRAMS</span>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
                  >
                    <FiBookOpen className="text-black text-2xl" />
                    <span className="text-gray-600">All Courses</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/semesters"
                    className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
                  >
                    <MdTimeline className="text-black text-2xl" />
                    <span className="text-gray-600">Semesters</span>
                  </Link>
                </li>
              </div>
            ) : (
              ""
            )}

            <li className="text-gray-400 pl-2 pt-6 text-sm">
              <span>USER</span>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer"
              >
                <BsPersonCircle className="text-black text-2xl" />
                <span className="text-gray-600">Profile</span>
              </Link>
            </li>
            <li
              onClick={logOut}
              className="flex gap-2 items-center pr-6 pl-2 mb-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer "
            >
              <BiLogOutCircle className="text-black text-2xl " />
              <span className="text-gray-600 ">Logout</span>
            </li>
          </ul>
        </div>
        <hr className="mb-3 mt-6 mx-2" />
        <div className="bottom px-2">
          <div className="text-gray-400 pl-2 pt-3 text-sm">
            <span>SUPPORT</span>
          </div>
          <div className="flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer">
            <MdHelpOutline className="text-black text-2xl" />
            <span className="text-gray-600">Help</span>
          </div>
          <div className="flex w-full gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer">
            <MdInfoOutline className="text-black text-2xl" />
            <span className="text-gray-600">About</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

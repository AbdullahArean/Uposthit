import React from "react";
import { useState, useEffect, useParams } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

const LectureForm = () => {
  let location = useLocation();
  let arr = location.pathname.split("courses/");
  let id = arr[arr.length - 1];
  
  // let id = courseID;
  const [lectureTopic, setLectureTopic] = useState("");
  const [lectureDate, setLectureDate] = useState("");
  const [lectureTime, setLectureTime] = useState("");
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);
  

  var date = new Date();

  var today =
    date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
  var time = date.getHours() + ":" + date.getMinutes();

  useEffect(() => {
    setLectureDate(today.toString());
  setLectureTime(time.toString());
   
  
  },[]);
  

  // var lecturedate = document.getElementById("lec_date").value;
  // var lecturetime = document.getElementById("lec_time").value;

  const addLecture = () => {
    axios
      .post("/?insertlecture", {
        lecture_topic: lectureTopic,
        lecture_date: lectureDate,
        lecture_time: lectureTime,
        course_id: id,
      })
      .then((response) => {
        if (response.data === 1) {
          setdataInserted(true);
          setdataInsertedError(false);
        } else {
          setdataInsertedError(true);
          setdataInserted(false);
        }
      });

      console.log(lectureDate);
  };

  

  function lecFormValidation() {
    let lecTopic = document.getElementById("lec_topic").value;

    let topicCheck = /^[a-zA-Z0-9\s]{1,100}$/;

    if (topicCheck.test(lecTopic) === false) {
      document.getElementById("lecTopicError").innerText =
        "Please insert a valid topic";
    } else {
      document.getElementById("lecTopicError").innerText = "";
    }

    if (topicCheck.test(lecTopic) === true) {
      addLecture();
    }
  }

  return (
    <div>
      <form data-bitwarden-watching="1">
        <div className="title text-center text-3xl mb-6 -mt-2">
          Create A Lecture
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="mb-6 col-end-3 col-span-2">
            <label
              htmlFor="lec_topic"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Lecture Topic
            </label>
            <input
              type="text"
              id="lec_topic"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setLectureTopic(event.target.value);
              }}
            />
            <span id="lecTopicError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="mb-6">
            <label
              htmlFor="lec_date"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Date
            </label>
            <input
              type="text"
              id="lec_date"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              value={today.toString()}
              disabled
              
              // onChange={(event) => {
              //   setLectureDate(today.toString());
              // }}
            />
            <span id="lecDateError" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="lec_time"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Time
            </label>
            <input
              type="text"
              id="lec_time"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              value={time.toString()}
              disabled
              // onChange={(event) => {
              //   setLectureTime(event.target.value);
              // }}
              // setLectureTime(time.toString())
            />
            <span id="lecTimeError" className="text-red-800"></span>
          </div>
        </div>
        {dataInserted ? (
          <div
            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 mb-6 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Success! Data has been inserted</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {dataInsertedError ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded relative"
            role="alert"
          >
            <strong className="font-bold">
              Error! Data couldn't be inserted
            </strong>

            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="grid grid-cols-3 gap-12">
          <button
            id="lec_submit"
            onClick={lecFormValidation}
            type="button"
            className="col-start-2 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Add New Lecture
          </button>
          <button
            id="reset"
            type="reset"
            onClick={() => {
              setdataInserted(false);
              setdataInsertedError(false);
            }}
            className="text-black bg-white border-2 border-gray-500 hover:bg-red-500 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default LectureForm;

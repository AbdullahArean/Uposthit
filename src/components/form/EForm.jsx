/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EForm = ({ student, loading, semester }) => {
  var data = student;
  const [studentID, setStudentID] = useState("");
  const [semID, setSemID] = useState([]);
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);
  
  
  const enrollStudent = () => {
    for(var i=0; i<semID.length; i++)
    {
      axios
        .post("/?insertsemesterassign", {
          s_reg: studentID,
          sem_id: semID[i],
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
    }
  };

  const eFormValidation = () => {
    let notChecked = true;
    const student = document.getElementById("student").value;
    if (student === "-") {
      document.getElementById("sError").innerText = "Please select a student";
    } else {
      document.getElementById("sError").innerText = "";
    }
    var allInputs = document.getElementsByTagName("input");
    for (var i = 1, max = allInputs.length; i < max; i++) {
      if (allInputs[i].checked === true) {
        notChecked = false;
        document.getElementById("semError").innerText = "";
        break;
      } else {
        document.getElementById("semError").innerText = "Please select a semester";
      }
    }
    if (student !== "-" && notChecked === false) {
      enrollStudent();
    }
  };


  const changeStudent = (event) => {
    setStudentID(event.target.value);
    console.log(studentID);
    var allInputs = document.getElementsByTagName("input");
    for (var i = 0, max = allInputs.length; i < max; i++) {
      if (allInputs[i].type === "checkbox") allInputs[i].checked = false;
    }
  };

  const selectSemester = (e, sem_id) => {
    if (e.target.checked) {
      setSemID(sem_id);
    } else {
      setSemID("");
    }
  };

  const renderOption = Object.keys(data).map((e) => {
    var s_name = data[e].s_name;
    var s_reg = data[e].id;
    var student_text = s_name + " - " + s_reg;
    return (
      <option key={data[e].id} value={s_reg}>
        {student_text}
      </option>
    );
  });
  useEffect(() => {
  }, []);
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="mb-6 flex flex-col justify-center">
        <label
          htmlFor="student"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          Select Student
        </label>
        <select
          key={student.id}
          id="student"
          className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
          onChange={(event) => {
            changeStudent(event);
          }}
        >
          <option>-</option>
          {renderOption}
        </select>
        <span id="sError" className="text-red-800"></span>
      </div>
      <div className="flex flex-col gap-y-6">
        {semester.map((semester) => {
          return (
            <div key={semester.sem_code} className="flex gap-8 ">
              <div className="flex items-center gap-2">
                <input
                  id="teal"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                  onChange={(e) => selectSemester(e, semester.sem_code)}
                />
                <label
                  htmlFor="teal-checkbox"
                  className="ml-2 text-lg font-medium text-gray-900"
                >
                  <div className="flex gap-6">
                    <div className="">{semester.sem_code}</div>
                    <div className="">{semester.sem_name}</div>
                  </div>
                </label>
              </div>
            </div>
          );
        })}
        <span id="semError" className="text-red-800"></span>
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
      <div className="grid grid-cols-2 col-start-2 gap-12">
        <button
          id="c_submit"
          onClick={eFormValidation}
          type="button"
          className="col-start-1 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
        >
          Enroll Student
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
    </div>
  );
};

export default EForm;
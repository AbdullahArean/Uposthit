import React from "react";
import { useState } from "react";
import Axios from "axios";

const SemForm = () => {
  const [semesterName, setsemesterName] = useState("");
  const [officerCode, setOfficerCode] = useState("");
  const [semesterYear, setsemesterYear] = useState("");
  const [semesterNo, setsemesterNo] = useState("");
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);

  const addSemester = () => {
    Axios.post("http://localhost:3001/createSemester", {
      sem_name: semesterName,
      sem_year: semesterYear,
      sem_code: semesterNo,
      o_code: officerCode,
      sem_running: 1,
    }).then((response) => {
      if (response.data === 1) {
        setdataInserted(true);
        setdataInsertedError(false);
      } else {
        setdataInsertedError(true);
        setdataInserted(false);
      }
    });
  };

  function semFormValidation() {
    let semName = document.getElementById("sem_name").value;
    let semYear = document.getElementById("sem_year").value;
    let semCode = document.getElementById("sem_code").value;
    let oCode = document.getElementById("o_code").value;

    let nameCheck = /^[a-zA-Z\s]{1,100}$/;
    let yearCheck = /^[2]{1}[0]{1}[\d\d]{2}[-][2]{1}[0]{1}[\d\d]{2}$/;
    let codeCheck = /^[1-4]{1}[-]{1}[1-2]{1}$/;
    let oCodeCheck = /^[O]{1}[0-9]{3}$/;

    if (nameCheck.test(semName) === false) {
      document.getElementById("semNameError").innerText =
        "Please insert a valid name";
    } else {
      document.getElementById("semNameError").innerText = "";
    }

    if (codeCheck.test(semCode) === false) {
      document.getElementById("semCodeError").innerText =
        "Please insert a valid semester code";
    } else {
      document.getElementById("semCodeError").innerText = "";
    }

    if (yearCheck.test(semYear) === false) {
      document.getElementById("semYearError").innerText =
        "Please insert a valid year";
    } else {
      document.getElementById("semYearError").innerText = "";
    }

    if (oCodeCheck.test(oCode) === false) {
      document.getElementById("oCodeError").innerText =
        "Please insert a valid officer code";
    } else {
      document.getElementById("oCodeError").innerText = "";
    }

    if (
      nameCheck.test(semName) === true &&
      codeCheck.test(semCode) === true &&
      yearCheck.test(semYear) === true &&
      oCodeCheck.test(oCode) === true
    ) {
      addSemester();
    }
  }

  return (
    <div>
      <form data-bitwarden-watching="1">
        <div className="title text-center text-3xl mb-6 -mt-2">
          Create A Semester
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="mb-6 col-end-3 col-span-2">
            <label
              htmlFor="sem_name"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Semester Name
            </label>
            <input
              type="text"
              id="sem_name"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setsemesterName(event.target.value);
              }}
            />
            <span id="semNameError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="mb-6">
            <label
              htmlFor="sem_year"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Session
            </label>
            <input
              type="text"
              id="sem_year"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setsemesterYear(event.target.value);
              }}
            />
            <span id="semYearError" className="text-red-800"></span>
          </div>

          <div className="mb-6">
            <label
              htmlFor="sem_code"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Semester Code
            </label>
            <input
              type="text"
              id="sem_code"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setsemesterNo(event.target.value);
              }}
            />
            <span id="semCodeError" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="o_code"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Officer Code
            </label>
            <input
              type="text"
              id="o_code"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setOfficerCode(event.target.value);
              }}
            />
            <span id="oCodeError" className="text-red-800"></span>
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
          <div className="flex items-center mb-4">
            <input
              id="sem_running"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-md font-medium text-gray-900"
            >
              Running
            </label>
          </div>
          <button
            id="sem_submit"
            onClick={semFormValidation}
            type="button"
            className="col-start-2 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Add New Semester
          </button>
          <button
            id="reset"
            type="reset"
            className="text-black bg-white border-2 border-gray-500 hover:bg-red-500 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SemForm;

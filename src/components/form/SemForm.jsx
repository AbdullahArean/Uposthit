import React from "react";
import { useState } from "react";
import Axios from "axios";

const SemForm = () => {
  const [semesterName, setsemesterName] = useState("");
  const [semesterYear, setsemesterYear] = useState("");
  const [semesterNo, setsemesterNo] = useState("");

  const addSemester = () => {
    Axios.post("http://localhost:3001/createSemester", {
      semester_name: semesterName,
      s_year: semesterYear,
      s_semester: semesterNo,
    }).then(() => {
      console.log("success");
    });
  };

  function semFormValidation() {
    let semName = document.getElementById("sem_name").value;
    let semYear = document.getElementById("s_year").value;
    let semNo = document.getElementById("s_semester").value;

    let nameCheck = /^[a-zA-Z\s]{1,100}$/;
    let semCheck = /^[1-2]{1}$/;
    let yearCheck = /^[1-4]{1}$/;

    if (nameCheck.test(semName) === false) {
      document.getElementById("semNameError").innerText =
        "Please insert a valid name";
    } else {
      document.getElementById("semNameError").innerText = "";
    }

    if (semCheck.test(semNo) === false) {
      document.getElementById("sNoError").innerText =
        "Please insert a valid semester number";
    } else {
      document.getElementById("sNoError").innerText = "";
    }

    if (yearCheck.test(semYear) === false) {
      document.getElementById("semYearError").innerText =
        "Please insert a valid year";
    } else {
      document.getElementById("semYearError").innerText = "";
    }

    if (
      nameCheck.test(semName) === true &&
      semCheck.test(semNo) === true &&
      yearCheck.test(semYear) === true
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
        <div className="grid md:grid-cols-2 gap-16">
          <div className="mb-6">
            <label
              htmlFor="s_year"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Year
            </label>
            <input
              type="text"
              id="s_year"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setsemesterYear(event.target.value);
              }}
            />
            <span id="semYearError" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="s_semester"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Semester No.
            </label>
            <input
              type="text"
              id="s_semester"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setsemesterNo(event.target.value);
              }}
            />
            <span id="sNoError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="flex items-center mb-4">
            <input
              id="c_archive"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-md font-medium text-gray-900"
            >
              Archive
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

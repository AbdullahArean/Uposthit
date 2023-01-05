import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SForm = () => {
  const [studentName, setstudentName] = useState("");
  const [studentReg, setstudentReg] = useState("");
  const [studentRoll, setstudentRoll] = useState("");
  const [studentSemester, setstudentSemester] = useState("");
  const [studentPMail, setstudentPMail] = useState("");
  const [studentEMail, setstudentEMail] = useState("");
  const [studentPMobile, setstudentPMobile] = useState("");
  const [studentEMobile, setstudentEMobile] = useState("");
  const [loading, setLoading] = useState(true);
  const [semesterData, setsemesterData] = useState("");
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);

  useEffect(() => {
    if (loading) {
      axios.get("/?getAllsemester").then((response) => {
        setLoading(false);
        setsemesterData(response.data);
      });
    }
  });

  const addStudent = () => {
    axios
      .post("/?insertstudent", {
        s_name: studentName,
        reg: studentReg,
        class_roll: studentRoll,
        semester_id: studentSemester,
        p_email: studentPMail,
        e_email: studentEMail,
        p_contact: studentPMobile,
        e_contact: studentEMobile,
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
  };

  function sFormValidation() {
    let sName = document.getElementById("s_name").value;
    let sSem = document.getElementById("s_sem").value;
    let sReg = document.getElementById("s_reg").value;
    let sRoll = document.getElementById("s_roll").value;
    let sMobile1 = document.getElementById("s_mobile1").value;
    let sMobile2 = document.getElementById("s_mobile2").value;
    let sMail1 = document.getElementById("s_mail1").value;
    let sMail2 = document.getElementById("s_mail2").value;

    let nameCheck = /^[a-zA-Z\s]{1,100}$/;
    let regCheck = /^[0-9]{4}.[0-9]{3}.[0-9]{3}$/;
    let rollCheck = /^[A-Z]{2}-[0-9]{2}$/;
    let mobileCheck = /^[0]{1}[1]{1}[0-9]{9}$/;
    let mailCheck = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (nameCheck.test(sName) === false) {
      document.getElementById("sNameError").innerText =
        "Please insert a valid name";
    } else {
      document.getElementById("sNameError").innerText = "";
    }

    if (regCheck.test(sReg) === false) {
      document.getElementById("sRegError").innerText =
        "Please insert a valid registration number";
    } else {
      document.getElementById("sRegError").innerText = "";
    }

    if (rollCheck.test(sRoll) === false) {
      document.getElementById("sRollError").innerText =
        "Please insert a valid roll";
    } else {
      document.getElementById("sRollError").innerText = "";
    }

    if (mobileCheck.test(sMobile1) === false) {
      document.getElementById("sMobile1Error").innerText =
        "Please insert a valid contact";
    } else {
      document.getElementById("sMobile1Error").innerText = "";
    }

    if (mobileCheck.test(sMobile2) === false) {
      document.getElementById("sMobile2Error").innerText =
        "Please insert a valid contact";
    } else {
      document.getElementById("sMobile2Error").innerText = "";
    }

    if (mailCheck.test(sMail1) === false) {
      document.getElementById("sMail1Error").innerText =
        "Please insert a valid mail";
    } else {
      document.getElementById("sMail1Error").innerText = "";
    }

    if (mailCheck.test(sMail2) === false) {
      document.getElementById("sMail2Error").innerText =
        "Please insert a valid mail";
    } else {
      document.getElementById("sMail2Error").innerText = "";
    }

    if (sSem === "-") {
      document.getElementById("sSemError").innerText =
        "Please select a semester";
    } else {
      document.getElementById("sSemError").innerText = "";
    }

    if (
      nameCheck.test(sName) === true &&
      rollCheck.test(sRoll) === true &&
      mobileCheck.test(sMobile1) === true &&
      mobileCheck.test(sMobile2) === true &&
      mailCheck.test(sMail1) === true &&
      mailCheck.test(sMail2) === true &&
      sSem !== "-"
    ) {
      addStudent();
    }
  }

  var data = semesterData;
  const renderOption = Object.keys(data).map((e) => {
    var s_year = data[e].s_year;
    var s_semester = data[e].s_semester;
    var semester_id = data[e].semester_id;
    var semester_text = s_year + " - " + s_semester;
    return <option key={data[e].semester_id} value={semester_id}>{semester_text}</option>;
  });

  return (
    <div>
      <form data-bitwarden-watching="1">
        <div className="title text-center text-3xl mb-6 -mt-2">
          Create A Student
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="mb-6 col-end-3 col-span-2">
            <label
              htmlFor="s_name"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="s_name"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue block w-full p-2.5"
              onChange={(event) => {
                setstudentName(event.target.value);
              }}
            />
            <span id="sNameError" className="text-red-800"></span>
          </div>

          <div className="mb-6">
            <label
              htmlFor="s_sem"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Select Current Semester
            </label>
            <select
              id="s_sem"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setstudentSemester(event.target.value);
              }}
            >
              <option>-</option>
              {/* <option>1-1</option>
                        <option>1-2</option>
                        <option>2-1</option>
                        <option>2-2</option>
                        <option>3-1</option>
                        <option>3-2</option>
                        <option>4-1</option>
                        <option>4-2</option>
                        <option>M.Sc</option> */}
              {loading ? "" : renderOption}
            </select>
            <span id="sSemError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="mb-6 col-end-3 col-span-2">
            <label
              htmlFor="s_reg"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Registration No.
            </label>
            <input
              type="text"
              id="s_reg"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="ex. 2023-017-342"
              onChange={(event) => {
                setstudentReg(event.target.value);
              }}
            />
            <span id="sRegError" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="s_roll"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              className Roll
            </label>
            <input
              type="text"
              id="s_roll"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="ex. FH-69"
              onChange={(event) => {
                setstudentRoll(event.target.value);
              }}
            />
            <span id="sRollError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-24">
          <div className="mb-6">
            <label
              htmlFor="s_mobile1"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Primary Contact No.
            </label>
            <input
              type="text"
              id="s_mobile1"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue block w-full p-2.5"
              placeholder="(+88)-"
              onChange={(event) => {
                setstudentPMobile(event.target.value);
              }}
            />
            <span id="sMobile1Error" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="s_mobile2"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Emergency Contact No.
            </label>
            <input
              type="text"
              id="s_mobile2"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue block w-full p-2.5"
              placeholder="(+88)-"
              onChange={(event) => {
                setstudentEMobile(event.target.value);
              }}
            />
            <span id="sMobile2Error" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-24">
          <div className="mb-6">
            <label
              htmlFor="s_mail1"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Primary E-Mail Address
            </label>
            <input
              type="email"
              id="s_mail1"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue block w-full p-2.5"
              placeholder="student@example.com"
              onChange={(event) => {
                setstudentPMail(event.target.value);
              }}
            />
            <span id="sMail1Error" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="s_mail_2"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Emergency E-Mail Address
            </label>
            <input
              type="email"
              id="s_mail2"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-blue block w-full p-2.5"
              placeholder="student@example.com"
              onChange={(event) => {
                setstudentEMail(event.target.value);
              }}
            />
            <span id="sMail2Error" className="text-red-800"></span>
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
            <strong className="font-bold">Error! Data couldn't be inserted</strong>

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
        <div className="grid grid-cols-4 gap-12">
          <button
            id="s_submit"
            onClick={sFormValidation}
            type="button"
            className="col-start-3 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Add New Student
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

export default SForm;

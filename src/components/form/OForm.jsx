import React from "react";
import { useState } from "react";
import Axios from "axios";

const OForm = () => {
  const [officerName, setofficerName] = useState("");
  const [officerID, setofficerID] = useState("");
  const [officerDesignation, setofficerDesignation] = useState("");
  const [officerMail, setofficerMail] = useState("");
  const [officerMobile, setofficerMobile] = useState("");
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);

  const addOfficer = () => {
    Axios.post("/?insertofficer", {
      o_name: officerName,
      o_code: officerID,
      o_des: officerDesignation,
      o_email: officerMail,
      o_contact: officerMobile,
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

  function oFormValidation() {
    let oName = document.getElementById("o_name").value;
    let oId = document.getElementById("o_id").value;
    let oMobile = document.getElementById("o_mobile").value;
    let oMail = document.getElementById("o_mail").value;
    let oDes = document.getElementById("o_des").value;

    let nameCheck = /^[a-zA-Z\s]{1,100}$/;
    let idCheck = /^[O]{1}[0-9]{3}$/;
    let mobileCheck = /^[0]{1}[1]{1}[0-9]{9}$/;
    let mailCheck = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (nameCheck.test(oName) === false) {
      document.getElementById("oNameError").innerText =
        "Please insert a valid name";
    } else {
      document.getElementById("oNameError").innerText = "";
    }

    if (idCheck.test(oId) === false) {
      document.getElementById("oIdError").innerText =
        "Please insert a valid ID";
    } else {
      document.getElementById("oIdError").innerText = "";
    }

    if (mobileCheck.test(oMobile) === false) {
      document.getElementById("oMobileError").innerText =
        "Please insert a valid contact";
    } else {
      document.getElementById("oMobileError").innerText = "";
    }

    if (mailCheck.test(oMail) === false) {
      document.getElementById("oMailError").innerText =
        "Please insert a valid mail";
    } else {
      document.getElementById("oMailError").innerText = "";
    }

    if (oDes === "-") {
      document.getElementById("oDesError").innerText =
        "Please select a designation";
    } else {
      document.getElementById("oDesError").innerText = "";
    }

    if (
      nameCheck.test(oName) === true &&
      idCheck.test(oId) === true &&
      mobileCheck.test(oMobile) === true &&
      mailCheck.test(oMail) === true &&
      oDes !== "-"
    ) {
      addOfficer();
    }
  }

  return (
    <div>
      <form data-bitwarden-watching="1">
        <div className="title text-center text-3xl mb-6 -mt-2">
          Create An Officer
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="mb-6 col-end-3 col-span-2">
            <label
              htmlFor="o_name"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="o_name"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setofficerName(event.target.value);
              }}
            />
            <span id="oNameError" className="text-red-800"></span>
          </div>

          <div className="mb-6">
            <label
              htmlFor="o_id"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Officer Code
            </label>
            <input
              type="text"
              id="o_id"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="ex. O001"
              onChange={(event) => {
                setofficerID(event.target.value);
              }}
            />
            <span id="oIdError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-24">
          <div className="mb-6">
            <label
              htmlFor="o_mobile"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Contact No.
            </label>
            <input
              type="text"
              id="o_mobile"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="(+88)-"
              onChange={(event) => {
                setofficerMobile(event.target.value);
              }}
            />
            <span id="oMobileError" className="text-red-800"></span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="o_mail"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              E-Mail Address
            </label>
            <input
              type="email"
              id="o_mail"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              placeholder="officer@example.com"
              onChange={(event) => {
                setofficerMail(event.target.value);
              }}
            />
            <span id="oMailError" className="text-red-800"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-1">
          <div className="mb-6">
            <label
              htmlFor="o_des"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Designation
            </label>
            <select
              id="o_des"
              className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
              onChange={(event) => {
                setofficerDesignation(event.target.value);
              }}
            >
              <option>-</option>
              <option>Principal Technical Officer</option>
              <option>Superintendent Engineer</option>
              <option>Senior Technical Officer</option>
              <option>Senior Administrative Officer</option>
              <option>Technical Officer</option>
            </select>
            <span id="oDesError" className="text-red-800"></span>
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
        <div className="grid grid-cols-4 gap-12">
          <button
            type="button"
            onClick={oFormValidation}
            id="o_submit"
            className="col-start-3 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Add New Officer
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

export default OForm;

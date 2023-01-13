/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const IForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dataInserted, setdataInserted] = useState(false);
  const [dataInsertedError, setdataInsertedError] = useState(false);

  const insertUser = () => {};

  const iFormValidation = () => {
    const username = document.getElementById("username").value;
    const otp = document.getElementById("otp").value;

    let usernameCheck = /^[a-zA-Z0-9\s]{1,14}$/;
    let otpCheck = /^[a-zA-Z0-9\s]{1,32}$/;

    if (usernameCheck.test(username) === false) {
      document.getElementById("userNameError").innerText =
        "Please insert a valid username";
    } else {
      document.getElementById("userNameError").innerText = "";
    }

    if (otpCheck.test(otp) === false) {
      document.getElementById("otpError").innerText =
        "Please insert a valid OTP";
    } else {
      document.getElementById("otpError").innerText = "";
    }

    if (usernameCheck.test(username) === true && otpCheck.test(otp) === true) {
      insertUser();
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="grid grid-cols-2 gap-16">
        <div className="mb-6 col-end-3 col-span-2">
          <label
            htmlFor="sem_name"
            className="block mb-2 text-md font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <span id="userNameError" className="text-red-800"></span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="mb-6 col-end-3 col-span-2">
          <label
            htmlFor="otp"
            className="block mb-2 text-md font-medium text-gray-900"
          >
            OTP
          </label>
          <input
            type="text"
            id="otp"
            className="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-hblue block w-full p-2.5"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <span id="otpError" className="text-red-800"></span>
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
      <div className="grid grid-cols-2 col-start-2 gap-12">
        <button
          id="c_submit"
          onClick={iFormValidation}
          type="button"
          className="col-start-1 text-black bg-white border-2 border-gray-500 hover:bg-hblue hover:text-black focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center"
        >
          Insert User
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

export default IForm;

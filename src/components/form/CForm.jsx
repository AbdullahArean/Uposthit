import React from 'react'
import { useState } from 'react';
import Axios from 'axios';



const CForm = () => {

    const [courseName, setcourseName] = useState("");
    const [courseCode, setcourseCode] = useState("");
    const [courseSemester, setCourseSemester] = useState("1-1");
    const [courseYear, setcourseYear] = useState("");
    const [courseByOfficerID, setcourseByOfficerID] = useState("");


    const addCourse = () =>{
        Axios.post('http://localhost:3001/createCourse',{ 

            courseName: courseName,
            courseCode: courseCode,
            courseSemester: courseSemester,
            courseYear : courseYear,
            courseByOfficerID : courseByOfficerID,
        
      }).then(()=>{
        console.log("success");
      });
      };

      function cFormValidation () {
        let cName = document.getElementById('c_name').value;
        let cCode = document.getElementById('c_code').value;
        let cYear = document.getElementById('c_year').value;
        let oId = document.getElementById('o_id').value;
        let cSem = document.getElementById('c_sem').value;

        let nameCheck = /^[a-zA-Z\s]{1,100}$/;
        let idCheck = /^[0-9]{1,20}$/;
        let codeCheck = /^[A-Z]{3}\-[0-9]{4}$/;
        let yearCheck = /^[0-9]{4}$/;

        if(nameCheck.test(cName) === false){
            document.getElementById('cNameError').innerText="Please insert a valid name";
        }
        else {
            document.getElementById('cNameError').innerText="";
        }

        if(idCheck.test(oId) === false){
            document.getElementById('oIdError').innerText="Please insert a valid ID";
        }
        else {
            document.getElementById('oIdError').innerText="";
        }

        if(codeCheck.test(cCode) === false){
            document.getElementById('cCodeError').innerText="Please insert a valid course code";
        }
        else {
            document.getElementById('cCodeError').innerText="";
        }

        if(yearCheck.test(cYear) === false){
            document.getElementById('cYearError').innerText="Please insert a valid year";
        }
        else {
            document.getElementById('cYearError').innerText="";
        }

        if(cSem === '-'){
            document.getElementById('cSemError').innerText="Please select a semester";
        }
        else {
            document.getElementById('cSemError').innerText="";
        }

        if(nameCheck.test(cName) === true && idCheck.test(oId) === true && codeCheck.test(cCode) === true && yearCheck.test(cYear) === true && cSem !== '-'){
            addCourse();
        }
    }

  return (
    <div>
        
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Course</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="c_name" class="block mb-2 text-md font-medium text-gray-900">Course Name</label>
                    <input type="text" id="c_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" required="yes" onChange={(event)=>{
                        setcourseName(event.target.value);
                    }}/>
                    <span id="cNameError" className='text-red-800'></span>
                </div>
                
                <div className="mb-6">
                    <label for="c_sem" class="block mb-2 text-md font-medium text-gray-900">Select Semester</label>
                    <select id="c_sem" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setCourseSemester(event.target.value);
                    }}>
                        <option>-</option>
                        <option>1-1</option>
                        <option>1-2</option>
                        <option>2-1</option>
                        <option>2-2</option>
                        <option>3-1</option>
                        <option>3-2</option>
                        <option>4-1</option>
                        <option>4-2</option>
                    </select>
                    <span id="cSemError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
                <div class="mb-6">
                    <label for="c_code" class="block mb-2 text-md font-medium text-gray-900">Course Code</label>
                    <input type="text" id="c_code" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. PHY-1213" required="-" onChange={(event)=>{
                        setcourseCode(event.target.value);
                    }}/>
                    <span id="cCodeError" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="c_year" class="block mb-2 text-md font-medium text-gray-900">Year</label>
                    <input type="number" id="c_year" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 2022" required="20" onChange={(event)=>{
                        setcourseYear(event.target.value);
                    }}/>
                    <span id="cYearError" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="o_id" class="block mb-2 text-md font-medium text-gray-900">Created by</label>
                    <input type="text" id="o_id" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "input Officer ID" required="-" onChange={(event)=>{
                        setcourseByOfficerID(event.target.value);
                    }}/>
                    <span id="oIdError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <div class="flex items-center mb-4">
                    <input id="c_archive" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300" />
                    <label for="checkbox-1" class="ml-2 text-md font-medium text-gray-900">Archive</label>
                </div>
                <button id='c_submit' onClick={cFormValidation} type="button" class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Course</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default CForm
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
                </div>
                
                <div className="mb-6">
                    <label for="c_sem" class="block mb-2 text-md font-medium text-gray-900">Select Semester</label>
                    <select id="c_sem" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setCourseSemester(event.target.value);
                    }}>
                        <option>1-1</option>
                        <option>1-2</option>
                        <option>2-1</option>
                        <option>2-2</option>
                        <option>3-1</option>
                        <option>3-2</option>
                        <option>4-1</option>
                        <option>4-2</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
                <div class="mb-6">
                    <label for="c_code" class="block mb-2 text-md font-medium text-gray-900">Course Code</label>
                    <input type="text" id="c_code" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. PHY-1213" required="-" onChange={(event)=>{
                        setcourseCode(event.target.value);
                    }}/>
                </div>
                <div class="mb-6">
                    <label for="c_year" class="block mb-2 text-md font-medium text-gray-900">Year</label>
                    <input type="number" id="c_year" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 2022" required="20" onChange={(event)=>{
                        setcourseYear(event.target.value);
                    }}/>
                </div>
                <div class="mb-6">
                    <label for="o_id" class="block mb-2 text-md font-medium text-gray-900">Created by</label>
                    <input type="text" id="o_id" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "input Officer ID" required="-" onChange={(event)=>{
                        setcourseByOfficerID(event.target.value);
                    }}/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <div class="flex items-center mb-4">
                    <input id="c_archive" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300" />
                    <label for="checkbox-1" class="ml-2 text-md font-medium text-gray-900">Archive</label>
                </div>
                <button id='submit' onClick={addCourse} type="submit" class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Course</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default CForm
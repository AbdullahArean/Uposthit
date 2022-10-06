import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

const SForm = () => {

    const [studentName, setstudentName] = useState("");
    const [studentReg, setstudentReg] = useState("");
    const [studentRoll, setstudentRoll] = useState("");
    const [studentYear, setstudentYear] = useState("1st");
    const [studentPMail, setstudentPMail] = useState("");
    const [studentEMail, setstudentEMail] = useState("");
    const [studentPMobile, setstudentPMobile] = useState("");
    const [studentEMobile, setstudentEMobile] = useState("");


  
  
    const addStudent = () =>{
      Axios.post('http://localhost:3001/createStudent',{ 
        studentName: studentName,
        studentReg: studentReg,
        studentRoll: studentRoll,
        studentYear : studentYear,
        studentPMail : studentPMail,
        studentEMail : studentEMail,
        studentPMobile: studentPMobile,
        studentEMobile: studentEMobile,

    }).then(()=>{
      console.log("success");
    });
    };


  return (
    <div>
        
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Student</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="s_name" class="block mb-2 text-md font-medium text-gray-900">Full Name</label>
                    <input type="text" id="s_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" required="yes" onChange={(event)=>{
                        setstudentName(event.target.value);
                    }}

                    />
                </div>
                
                <div className="mb-6">
                    <label for="s_year" class="block mb-2 text-md font-medium text-gray-900">Select Current Year</label>
                    <select id="s_year" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setstudentYear(event.target.value);
                    }} >
                        <option className='ordinal'>1st</option>
                        <option className='ordinal'>2nd</option>
                        <option className='ordinal'>3rd</option>
                        <option className='ordinal'>4th</option>
                        <option>M.Sc.</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                <label for="s_reg" class="block mb-2 text-md font-medium text-gray-900">Registration No.</label>
                <input type="number" id="s_reg" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="ex. 2023-017-342" required="-" onChange={(event)=>{
                    setstudentReg(event.target.value);
                }}/>
                </div>
                <div class="mb-6">
                    <label for="s_roll" class="block mb-2 text-md font-medium text-gray-900">Class Roll</label>
                    <input type="number" id="s_roll" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 69" required="-" onChange={(event)=>{
                        setstudentRoll(event.target.value);
                    }}/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="s_mobile1" class="block mb-2 text-md font-medium text-gray-900">Primary Contact No.</label>
                    <input type="number" id="s_mobile1" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required="0" onChange={(event)=>{
                        setstudentPMobile(event.target.value);
                    }}/>
                </div>
                <div class="mb-6">
                    <label for="s_mobile2" class="block mb-2 text-md font-medium text-gray-900">Emergency Contact No.</label>
                    <input type="number" id="s_mobile2" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required="" onChange={(event)=>{
                        setstudentEMobile(event.target.value);
                    }}/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="s_mail1" class="block mb-2 text-md font-medium text-gray-900">Primary E-Mail Address</label>
                    <input type="email" id="s_mail1" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="student@example.com" required="@" onChange={(event)=>{
                        setstudentPMail(event.target.value);
                    }}/>
                </div>
                <div class="mb-6">
                    <label for="s_mail_2" class="block mb-2 text-md font-medium text-gray-900">Emergency E-Mail Address</label>
                    <input type="email" id="s_mail2" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="student@example.com" required="" onChange={(event)=>{
                        setstudentEMail(event.target.value);
                    }}/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <button id='submit' onClick={addStudent} type="submit" class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Student</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default SForm
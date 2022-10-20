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

    function sFormValidation () {
        let sName = document.getElementById('s_name').value;
        let sYear = document.getElementById('s_year').value;
        // let sReg = document.getElementById('s_reg').value;
        let sRoll = document.getElementById('s_roll').value;
        let sMobile1 = document.getElementById('s_mobile1').value;
        let sMobile2 = document.getElementById('s_mobile2').value;
        let sMail1 = document.getElementById('s_mail1').value;
        let sMail2 = document.getElementById('s_mail2').value;

        let nameCheck = /^[a-zA-Z\s]{1,100}$/;
        // let regCheck = /^[0-9]{4}\-[0-9]{3}\-[0-9]{3}$/;
        let rollCheck = /^[0-9]{2}$/;
        let mobileCheck = /^[0]{1}[1]{1}[0-9]{9}$/;
        let mailCheck = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/

        if(nameCheck.test(sName) === false){
            document.getElementById('sNameError').innerText="Please insert a valid name";
        }
        else {
            document.getElementById('sNameError').innerText="";
        }

        // if(regCheck.test(sReg) === false){
        //     document.getElementById('sRegError').innerText="Please insert a valid registration number";
        // }
        // else {
        //     document.getElementById('sRegError').innerText="";
        // }

        if(rollCheck.test(sRoll) === false){
            document.getElementById('sRollError').innerText="Please insert a valid roll";
        }
        else {
            document.getElementById('sRollError').innerText="";
        }

        if(mobileCheck.test(sMobile1) === false){
            document.getElementById('sMobile1Error').innerText="Please insert a valid contact";
        }
        else {
            document.getElementById('sMobile1Error').innerText="";
        }

        if(mobileCheck.test(sMobile2) === false){
            document.getElementById('sMobile2Error').innerText="Please insert a valid contact";
        }
        else {
            document.getElementById('sMobile2Error').innerText="";
        }

        if(mailCheck.test(sMail1) === false){
            document.getElementById('sMail1Error').innerText="Please insert a valid mail";
        }
        else {
            document.getElementById('sMail1Error').innerText="";
        }

        if(mailCheck.test(sMail2) === false){
            document.getElementById('sMail2Error').innerText="Please insert a valid mail";
        }
        else {
            document.getElementById('sMail2Error').innerText="";
        }

        if(sYear === '-'){
            document.getElementById('sYearError').innerText="Please select a designation";
        }
        else {
            document.getElementById('sYearError').innerText="";
        }

        if(nameCheck.test(sName) === true && rollCheck.test(sRoll) === true && mobileCheck.test(sMobile1) === true && mobileCheck.test(sMobile2) === true && mailCheck.test(sMail1) === true && mailCheck.test(sMail2) === true && sYear !== '-'){
            addStudent();
        }
    }


  return (
    <div>
        
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Student</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="s_name" class="block mb-2 text-md font-medium text-gray-900">Full Name</label>
                    <input type="text" id="s_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setstudentName(event.target.value);
                    }}/>
                    <span id="sNameError" className='text-red-800'></span>
                </div>
                
                <div className="mb-6">
                    <label for="s_year" class="block mb-2 text-md font-medium text-gray-900">Select Current Year</label>
                    <select id="s_year" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setstudentYear(event.target.value);
                    }} >
                        <option>-</option>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
                        <option>M.Sc.</option>
                    </select>
                    <span id="sYearError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="s_reg" class="block mb-2 text-md font-medium text-gray-900">Registration No.</label>
                    <input type="number" id="s_reg" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="ex. 2023-017-342" onChange={(event)=>{
                        setstudentReg(event.target.value);
                    }}/>
                    <span id="sRegError" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="s_roll" class="block mb-2 text-md font-medium text-gray-900">Class Roll</label>
                    <input type="number" id="s_roll" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 69" onChange={(event)=>{
                        setstudentRoll(event.target.value);
                    }}/>
                    <span id="sRollError" className='text-red-800'></span>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="s_mobile1" class="block mb-2 text-md font-medium text-gray-900">Primary Contact No.</label>
                    <input type="number" id="s_mobile1" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" onChange={(event)=>{
                        setstudentPMobile(event.target.value);
                    }}/>
                    <span id="sMobile1Error" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="s_mobile2" class="block mb-2 text-md font-medium text-gray-900">Emergency Contact No.</label>
                    <input type="number" id="s_mobile2" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" onChange={(event)=>{
                        setstudentEMobile(event.target.value);
                    }}/>
                    <span id="sMobile2Error" className='text-red-800'></span>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="s_mail1" class="block mb-2 text-md font-medium text-gray-900">Primary E-Mail Address</label>
                    <input type="email" id="s_mail1" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="student@example.com" onChange={(event)=>{
                        setstudentPMail(event.target.value);
                    }}/>
                    <span id="sMail1Error" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="s_mail_2" class="block mb-2 text-md font-medium text-gray-900">Emergency E-Mail Address</label>
                    <input type="email" id="s_mail2" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="student@example.com" onChange={(event)=>{
                        setstudentEMail(event.target.value);
                    }}/>
                    <span id="sMail2Error" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <button id='s_submit' onClick={sFormValidation} type="submit" class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Student</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default SForm
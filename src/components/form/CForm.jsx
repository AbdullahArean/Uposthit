import React from 'react'
import { useState } from 'react';
import Axios from 'axios';



const CForm = () => {

    const [courseName, setcourseName] = useState("");
    const [courseCode, setcourseCode] = useState("");
    const [courseCredit, setcourseCredit] = useState("");


    const addCourse = () =>{
        Axios.post('http://localhost:3001/createCourse',{ 

            courseName: courseName,
            courseCode: courseCode,
            courseCredit: courseCredit,
        
      }).then(()=>{
        console.log("success");
      });
      };

      function cFormValidation () {
        let cName = document.getElementById('c_name').value;
        let cCode = document.getElementById('c_code').value;
        // let cCredit = document.getElementById('c_credit').value;

        let nameCheck = /^[a-zA-Z\s]{1,100}$/;
        let codeCheck = /^[A-Z]{3}\-[0-9]{4}$/;

        if(nameCheck.test(cName) === false){
            document.getElementById('cNameError').innerText="Please insert a valid name";
        }
        else {
            document.getElementById('cNameError').innerText="";
        }

        if(codeCheck.test(cCode) === false){
            document.getElementById('cCodeError').innerText="Please insert a valid course code";
        }
        else {
            document.getElementById('cCodeError').innerText="";
        }

        if(nameCheck.test(cName) === true && codeCheck.test(cCode) === true){
            addCourse();
            window.location.reload();
        }
    }

  return (
    <div>
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Course</div>
            <div className="grid grid-cols-2 gap-16">
                <div class="mb-6 col-end- col-span-3">
                    <label for="c_name" class="block mb-2 text-md font-medium text-gray-900">Course Name</label>
                    <input type="text" id="c_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setcourseName(event.target.value);
                    }}/>
                    <span id="cNameError" className='text-red-800'></span>
                </div>
                
            </div>
            <div className="grid md:grid-cols-2 gap-16">
                <div class="mb-6">
                    <label for="c_credit" class="block mb-2 text-md font-medium text-gray-900">Course Credit</label>
                    <input type="text" id="c_credit" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setcourseCredit(event.target.value);
                    }}/>
                    <span id="cCreditError" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="c_code" class="block mb-2 text-md font-medium text-gray-900">Course Code</label>
                    <input type="text" id="c_code" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. PHY-1213" onChange={(event)=>{
                        setcourseCode(event.target.value);
                    }}/>
                    <span id="cCodeError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <button id='c_submit' onClick={oFormValidation} type="button" class="col-start-2 text-violet-800 bg-white border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Course</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default CForm
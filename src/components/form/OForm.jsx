import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

const OForm = () => {


    const [officerName, setofficerName] = useState("");
    const [officerID, setofficerID] = useState("");
    const [officerDesignation, setofficerDesignation] = useState("");
    const [officerMail, setofficerMail] = useState("");
    const [officerMobile, setofficerMobile] = useState("");


    const addOfficer = () =>{
        Axios.post('http://localhost:3001/createOfficer',{ 

          officerName: officerName,
          officerID: officerID,
          officerDesignation: officerDesignation,
          officerMail : officerMail,
          officerMobile : officerMobile,
        
      }).then(()=>{
        console.log("success");
    });
    };

    function oFormValidation () {
        let oName = document.getElementById('o_name').value;
        let oId = document.getElementById('o_id').value;
        let oMobile = document.getElementById('o_mobile').value;
        let oMail = document.getElementById('o_mail').value;
        let oDes = document.getElementById('o_des').value;

        let nameCheck = /^[a-zA-Z\s]{1,100}$/;
        let idCheck = /^[0-9]{1,20}$/;
        let mobileCheck = /^[0]{1}[1]{1}[0-9]{9}$/;
        let mailCheck = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/

        if(nameCheck.test(oName) === false){
            document.getElementById('oNameError').innerText="Please insert a valid name";
        }
        else {
            document.getElementById('oNameError').innerText="";
        }

        if(idCheck.test(oId) === false){
            document.getElementById('oIdError').innerText="Please insert a valid ID";
        }
        else {
            document.getElementById('oIdError').innerText="";
        }

        if(mobileCheck.test(oMobile) === false){
            document.getElementById('oMobileError').innerText="Please insert a valid contact";
        }
        else {
            document.getElementById('oMobileError').innerText="";
        }

        if(mailCheck.test(oMail) === false){
            document.getElementById('oMailError').innerText="Please insert a valid mail";
        }
        else {
            document.getElementById('oMailError').innerText="";
        }

        if(oDes === '-'){
            document.getElementById('oDesError').innerText="Please select a designation";
        }
        else {
            document.getElementById('oDesError').innerText="";
        }

        if(nameCheck.test(oName) === true && idCheck.test(oId) === true && mobileCheck.test(oMobile) === true && mailCheck.test(oMail) === true && oDes !== '-'){
            addOfficer();
        }
    }    


  return (
    <div>
        
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create An Officer</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="o_name" class="block mb-2 text-md font-medium text-gray-900">Full Name</label>
                    <input type="text" id="o_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" required="yes" onChange={(event)=>{
                        setofficerName(event.target.value);
                    }}/>
                    <span id="oNameError" className='text-red-800'></span>
                </div>
                
                <div className="mb-6">
                    <label for="o_id" class="block mb-2 text-md font-medium text-gray-900">Officer ID</label>
                    <input type="text" id="o_id" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 293-362" required="yes" onChange={(event)=>{
                        setofficerID(event.target.value);
                    }}/>
                    <span id="oIdError" className='text-red-800'></span>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="o_mobile" class="block mb-2 text-md font-medium text-gray-900">Contact No.</label>
                    <input type="number" id="o_mobile" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required="0" onChange={(event)=>{
                        setofficerMobile(event.target.value);
                    }}/>
                    <span id="oMobileError" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="o_mail" class="block mb-2 text-md font-medium text-gray-900">E-Mail Address</label>
                    <input type="email" id="o_mail" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="officer@example.com" required="@" onChange={(event)=>{
                        setofficerMail(event.target.value);
                    }}/>
                    <span id="oMailError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid md:grid-cols-1">
                <div class="mb-6">
                    <label for="o_des" class="block mb-2 text-md font-medium text-gray-900">Designation</label>
                    <select id="o_des" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setofficerDesignation(event.target.value);
                    }}>
                        <option>-</option>
                        <option>Principal Technical Officer</option>
                        <option>Superintendent Engineer</option>
                        <option>Senior Technical Officer</option>
                        <option>Senior Administrative Officer</option>
                        <option>Technical Officer</option>
                    </select>
                    <span id="oDesError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <button type="button" onClick={oFormValidation} id='o_submit' class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Officer</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default OForm
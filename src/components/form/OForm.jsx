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
                </div>
                
                <div className="mb-6">
                    <label for="o_id" class="block mb-2 text-md font-medium text-gray-900">Officer ID</label>
                    <input type="text" id="o_id" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 293-362" required="yes" onChange={(event)=>{
                        setofficerID(event.target.value);
                    }}/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="o_tel" class="block mb-2 text-md font-medium text-gray-900">Contact No.</label>
                    <input type="tel" id="o_tel" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required="0" onChange={(event)=>{
                        setofficerMobile(event.target.value);
                    }}/>
                </div>
                <div class="mb-6">
                    <label for="o_email" class="block mb-2 text-md font-medium text-gray-900">E-Mail Address</label>
                    <input type="email" id="o_email" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="officer@example.com" required="@" onChange={(event)=>{
                        setofficerMail(event.target.value);
                    }}/>
                </div>
            </div>
            <div className="grid md:grid-cols-1">
                <div class="mb-6">
                    <label for="o_desc" class="block mb-2 text-md font-medium text-gray-900">Description (Optional)</label>
                    <textarea id="o_desc" rows="4" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="Add Description" onChange={(event)=>{
                        setofficerDesignation(event.target.value);
                    }}></textarea>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <button type="submit" onClick={addOfficer} id='submit' class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Officer</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default OForm
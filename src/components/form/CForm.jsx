import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';



const CForm = () => {

    const [courseName, setcourseName] = useState("");
    const [courseCode, setcourseCode] = useState("");
    const [courseCredit, setcourseCredit] = useState("");
    const [loading, setLoading] = useState(true);
    const [courseSemester, setcourseSemester] = useState("");
    const [semesterData, setsemesterData] = useState("");
    const [dataInserted, setdataInserted] = useState(false);
    const [dataInsertedError, setdataInsertedError] = useState(false);


    useEffect(() => {
        if(loading){
            axios.get('/?getAllsemester')
            .then((response) =>
             { 
                setLoading(false);
                setsemesterData(response.data);
             })
        }
    
    });

  function cFormValidation() {
    let cName = document.getElementById("c_name").value;
    let cCode = document.getElementById("c_code").value;
    // let cCredit = document.getElementById('c_credit').value;

    const addCourse = () =>{
        axios.post('/?insertcourse',{ 

            course_name: courseName,
            course_code: courseCode,
            course_credit: courseCredit,
            semester_id: courseSemester
        
      }).then((response)=>{
        if(response.data==1){
            setdataInserted(true)
            setdataInsertedError(false)
        }else{
            setdataInsertedError(true)
            setdataInserted(false)
        }
      });
      };

      function cFormValidation () {
        let cName = document.getElementById('c_name').value;
        let cCode = document.getElementById('c_code').value;
        // let cCredit = document.getElementById('c_credit').value;

        let nameCheck = /^[a-zA-Z\s]{1,100}$/;
        let codeCheck = /^[A-Z]{3}-[0-9]{4}$/;

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
            // window.location.reload();
        }
    }

    var data = semesterData;
    const renderOption = Object.keys(data)
    .map((e)=>{
        var c_year= data[e].s_year
     var c_semester=  data[e].s_semester
        var semester_id=  data[e].semester_id
        var semester_text = c_year + " - "+ c_semester;
        return <option value={semester_id}>{semester_text}</option>
    })

  return (
    <div>
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Course</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="c_name" class="block mb-2 text-md font-medium text-gray-900">Course Name</label>
                    <input type="text" id="c_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setcourseName(event.target.value);
                    }}/>
                    <span id="cNameError" className='text-red-800'></span>
                </div>
                <div className="mb-6">
                    <label for="c_sem" class="block mb-2 text-md font-medium text-gray-900">Select Current Semester</label>
                    <select id="c_sem" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" onChange={(event)=>{
                        setcourseSemester(event.target.value);
                    }}>
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
                        {loading?"":renderOption}
                    </select>
                    <span id="cSemError" className='text-red-800'></span>
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
            {dataInserted?<div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Success! Data has Inserted</p>
     
    </div>
  </div>
</div>:""}

{dataInsertedError?<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Error! Data couldn't Insert</strong>
 
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>:""}
            <div className="grid grid-cols-3 gap-12">
                <button id='c_submit' onClick={cFormValidation} type="button" class="col-start-2 text-violet-800 bg-white border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Course</button>
                <button id='reset' type="reset" onClick={()=>{
                      setdataInserted(false)
                      setdataInsertedError(false)
                    }} class="text-red-700 bg-white border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  );
};
}
export default CForm;

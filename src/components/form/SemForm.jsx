import React from 'react'



const SemForm = () => {

      const addSemester = () => {
        //something
      }

      function semFormValidation () {
        let semName = document.getElementById('sem_name').value;
        let semYear = document.getElementById('sem_year').value;
        let oId = document.getElementById('o_id').value;

        let nameCheck = /^[a-zA-Z\s]{1,100}$/;
        let idCheck = /^[0-9]{1,20}$/;
        let yearCheck = /^[0-9]{4}$/;

        if(nameCheck.test(semName) === false){
            document.getElementById('semNameError').innerText="Please insert a valid name";
        }
        else {
            document.getElementById('semNameError').innerText="";
        }

        if(idCheck.test(oId) === false){
            document.getElementById('oIdError').innerText="Please insert a valid ID";
        }
        else {
            document.getElementById('oIdError').innerText="";
        }

        if(yearCheck.test(semYear) === false){
            document.getElementById('semYearError').innerText="Please insert a valid year";
        }
        else {
            document.getElementById('semYearError').innerText="";
        }

        if(nameCheck.test(semName) === true && idCheck.test(oId) === true && yearCheck.test(semYear) === true){
            addSemester();
        }
    }

  return (
    <div>
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Semester</div>
            <div className="grid grid-cols-2 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="sem_name" class="block mb-2 text-md font-medium text-gray-900">Semester Name</label>
                    <input type="text" id="sem_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5"/>
                    <span id="semNameError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
                <div class="mb-6">
                    <label for="sem_year" class="block mb-2 text-md font-medium text-gray-900">Year</label>
                    <input type="number" id="sem_year" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 2022"/>
                    <span id="semYearError" className='text-red-800'></span>
                </div>
                <div class="mb-6">
                    <label for="o_id" class="block mb-2 text-md font-medium text-gray-900">Created by</label>
                    <input type="text" id="o_id" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "input Officer ID"/>
                    <span id="oIdError" className='text-red-800'></span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <div class="flex items-center mb-4">
                    <input id="c_archive" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300" />
                    <label for="checkbox-1" class="ml-2 text-md font-medium text-gray-900">Archive</label>
                </div>
                <button id='sem_submit' onClick={semFormValidation} type="button" class="col-start-2 text-violet-800 bg-white border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Semester</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default SemForm
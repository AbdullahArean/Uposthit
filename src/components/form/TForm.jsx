import React from 'react'

const TForm = () => {
  return (
    <div>
        
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Teacher</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="t_name" class="block mb-2 text-md font-medium text-gray-900">Full Name</label>
                    <input type="text" id="t_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" required="yes"/>
                </div>
                
                <div className="mb-6">
                    <label for="t_id" class="block mb-2 text-md font-medium text-gray-900">Teacher ID</label>
                    <input type="text" id="t_id" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. 293-362" required="yes"/>
                </div>
            </div>
            <div className="grid md:grid-cols-1">
                <div class="mb-6">
                    <label for="t_dept" class="block mb-2 text-md font-medium text-gray-900">Department</label>
                    <input type="text" id="t_dept" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="ex. Computer Science & Engineering" required="yes"/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="t_tel" class="block mb-2 text-md font-medium text-gray-900">Contact No.</label>
                    <input type="tel" id="t_tel" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required="0"/>
                </div>
                <div class="mb-6">
                    <label for="t_email" class="block mb-2 text-md font-medium text-gray-900">E-Mail Address</label>
                    <input type="email" id="t_email" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="teacher@example.com" required="@"/>
                </div>
            </div>
            <div className="grid md:grid-cols-1">
                <div class="mb-6">
                    <label for="t_desc" class="block mb-2 text-md font-medium text-gray-900">Description (Optional)</label>
                    <textarea id="t_desc" rows="4" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="Add Description"></textarea>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <button type="submit" id='submit' class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Teacher</button>
                <button id='reset' type="reset" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Reset</button>
            </div>
        </form>

    </div>
  )
}

export default TForm
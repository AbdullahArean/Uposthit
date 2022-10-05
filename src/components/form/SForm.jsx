import React from 'react'

const SForm = () => {
  return (
    <div>
        
        <form data-bitwarden-watching="1">
            <div className="title text-center text-3xl mb-6 -mt-2">Create A Student</div>
            <div className="grid grid-cols-3 gap-16">
                <div class="mb-6 col-end-3 col-span-2">
                    <label for="Full_Name" class="block mb-2 text-md font-medium text-gray-900">Full Name</label>
                    <input type="text" id="s_name" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" required=""/>
                </div>
                
                <div className="mb-6">
                    <label for="S_Year" class="block mb-2 text-md font-medium text-gray-900">Select Current Year</label>
                    <select id="year" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5">
                        <option className='ordinal'>1st</option>
                        <option className='ordinal'>2nd</option>
                        <option className='ordinal'>3rd</option>
                        <option className='ordinal'>4th</option>
                        <option>M.Sc.</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
                <div class="mb-6">
                <label for="Roll" class="block mb-2 text-md font-medium text-gray-900">Class Roll</label>
                <input type="text" id="roll" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder= "ex. SH-69" required=""/>
                </div>
                <div class="mb-6 col-end-4 col-span-2">
                    <label for="Reg_No." class="block mb-2 text-md font-medium text-gray-900">Registration No.</label>
                    <input type="number" id="s_reg" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="ex. 2023-017-342" required=""/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="Phone_1" class="block mb-2 text-md font-medium text-gray-900">Primary Contact No.</label>
                    <input type="tel" id="tel_1" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required=""/>
                </div>
                <div class="mb-6">
                    <label for="Phone_2" class="block mb-2 text-md font-medium text-gray-900">Emergency Contact No.</label>
                    <input type="tel" id="tel_2" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="(+88)-" required=""/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-24'>
                <div class="mb-6">
                    <label for="email_1" class="block mb-2 text-md font-medium text-gray-900">Primary E-Mail Address</label>
                    <input type="email" id="email_1" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="student@example.com" required=""/>
                </div>
                <div class="mb-6">
                    <label for="email_2" class="block mb-2 text-md font-medium text-gray-900">Emergency E-Mail Address</label>
                    <input type="email" id="email_2" class="shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-800 block w-full p-2.5" placeholder="student@example.com" required=""/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                <button type="submit" class="col-start-3 text-violet-800 bg-white border border-2 border-violet-800 hover:bg-violet-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Add New Student</button>
                <button type="cancel" class="text-red-700 bg-white border border-2 border-red-700 hover:bg-red-800 hover:text-white focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center">Cancel</button>
            </div>
        </form>

    </div>
  )
}

export default SForm
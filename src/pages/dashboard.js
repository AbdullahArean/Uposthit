import React from 'react'

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='text-2xl ml-10 mt-5 font-semibold'>
        Running Courses
      </div>
      <hr className='my-5 mx-10' />


      <div className='text-2xl ml-10 mt-5'>
        1st Year
      </div>
      <hr className='my-5 mx-10' />
      <div class='grid grid-cols-4 gap-4 mx-10'>
      <div>
      <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">1st Course</h5>
            <p class="mb-3 font-normal text-gray-700">Teacher: X<br/>Class Schedule:<br/>Sunday- 8:30am to 9:50am<br/>Tuesday- 9:50am to 11:10am</p>
        </div>
      </a>
    </div>
        <div>
          <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">2nd Course</h5>
                <p class="mb-3 font-normal text-gray-700">Teacher: X<br/>Class Schedule:<br/>Sunday- 8:30am to 9:50am<br/>Tuesday- 9:50am to 11:10am</p>
            </div>
          </a>
        </div>
        <div>
          <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">3rd Course</h5>
                <p class="mb-3 font-normal text-gray-700">Teacher: X<br/>Class Schedule:<br/>Sunday- 8:30am to 9:50am<br/>Tuesday- 9:50am to 11:10am</p>
            </div>
          </a>
        </div>
        <div>
          <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">4th Course</h5>
                <p class="mb-3 font-normal text-gray-700">Teacher: X<br/>Class Schedule:<br/>Sunday- 8:30am to 9:50am<br/>Tuesday- 9:50am to 11:10am</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
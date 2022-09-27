import React from 'react'
import { CoursesData } from '../LocalData/coursesData'

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
        {CoursesData.map((course,index) => (
          <div>
            <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
              <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
              <div key={index} class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{course.courseName}</h5>
                <p class="mb-3 font-normal text-gray-700">Instructor: {course.instructor}<br/>Class Schedule:<br/>{course.date} - {course.startTime} to {course.endTime}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className='text-2xl ml-10 mt-5'>
        2nd Year
      </div>
      <hr className='my-5 mx-10' />
      <div class='grid grid-cols-4 gap-4 mx-10'>
        {CoursesData.map((course,index) => (
          <div>
            <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
              <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
              <div key={index} class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{course.courseName}</h5>
                <p class="mb-3 font-normal text-gray-700">Instructor: {course.instructor}<br/>Class Schedule:<br/>{course.date} - {course.startTime} to {course.endTime}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className='text-2xl ml-10 mt-5'>
        3rd Year
      </div>
      <hr className='my-5 mx-10' />
      <div class='grid grid-cols-4 gap-4 mx-10'>
        {CoursesData.map((course,index) => (
          <div>
            <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
              <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
              <div key={index} class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{course.courseName}</h5>
                <p class="mb-3 font-normal text-gray-700">Instructor: {course.instructor}<br/>Class Schedule:<br/>{course.date} - {course.startTime} to {course.endTime}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className='text-2xl ml-10 mt-5'>
        4th Year
      </div>
      <hr className='my-5 mx-10' />
      <div class='grid grid-cols-4 gap-4 mx-10'>
        {CoursesData.map((course,index) => (
          <div>
            <a href="#" class="block items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
              <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="" alt=""/>
              <div key={index} class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{course.courseName}</h5>
                <p class="mb-3 font-normal text-gray-700">Instructor: {course.instructor}<br/>Class Schedule:<br/>{course.date} - {course.startTime} to {course.endTime}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
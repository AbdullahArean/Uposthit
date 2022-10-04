import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'



const Sidebar = () => {
  return (
    <div className='flex-initial border-r h-screen bg-white text-black shadow-xl'>
        <div className="top flex h-12 items-center justify-center">
            <span className="logo text-violet-800 text-2xl font-black font-dancing-script ">UPOSTHIT</span>
        </div>
        <hr className='mb-3 mx-2'/>
        <div className="center px-2">
            <ul className='list-none m-0 p-0'>
                <li className='text-gray-400 pl-2 pt-3 text-sm'>
                    <span>MAIN</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 mb-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdDashboard className='text-violet-800'/>
                    <span className='text-gray-600'>Dashboard</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>LISTS</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 mb-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <FaIcons.FaBookReader className='text-violet-800'/>
                    <span className='text-gray-600'>Students</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <FaIcons.FaChalkboardTeacher className='text-violet-800'/>
                    <span className='text-gray-600'>Teachers</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <FaIcons.FaUserShield className='text-violet-800'/>
                    <span className='text-gray-600'>Officers</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>PROGRAMS</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <FiIcons.FiBookOpen className='text-violet-800'/>
                    <span className='text-gray-600'>Courses</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdTimeline className='text-violet-800'/>
                    <span className='text-gray-600'>Semesters</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>USER</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <BsIcons.BsPersonCircle className='text-violet-800'/>
                    <span className='text-gray-600'>Profile</span>
                </li>
                <li className='flex gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <BiIcons.BiLogOutCircle className='text-violet-800'/>
                    <span className='text-gray-600'>Logout</span>
                </li>
            </ul>
        </div> 
        <hr className='mb-3 mt-6 mx-2'/>
        <div className="bottom px-2">
            <div className='text-gray-400 pl-2 pt-6 text-sm'>
                <span>SELECT MODE</span>
            </div>
            <div className='flex items-center'>
                <div className='flex w-full gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdOutlineLightMode className='text-violet-800'/>
                    <span className='text-gray-600 text-sm'>Light</span>
                </div>
                <div className='flex w-full gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdNightlight className='text-violet-800'/>
                    <span className='text-gray-600 text-sm'>Dark</span>
                </div>
            </div>
        </div>
        <div className="bottom px-2 fixed bottom-0">
            <div className='flex items-center'>
                <div className='flex w-full gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdHelpOutline className='text-violet-800'/>
                    <span className='text-gray-600 text-sm'>Help</span>
                </div>
                <div className='flex w-full gap-1 items-center pr-4 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdInfoOutline className='text-violet-800'/>
                    <span className='text-gray-600 text-sm'>About</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
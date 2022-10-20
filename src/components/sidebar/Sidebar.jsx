import React from 'react'
import { Link } from 'react-router-dom'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'



const Sidebar = () => {
  return (
    <div className='flex-initial border-r h-screen relative bg-white text-black shadow-xl'>
        <div className="top flex h-12 items-center justify-center">
            <span className="logo text-black text-4xl font-black font-great-vibes ">Uposthit</span>
        </div>
        <hr className='mb-3 mx-2'/>
        <div className="center px-2">
            <ul className='list-none m-0 p-0'>
                <li className='text-gray-400 pl-2 pt-3 text-sm'>
                    <span>MAIN</span>
                </li>
                <li>
                    <Link to="/dashboard" className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                        <MdIcons.MdDashboard className='text-black text-2xl'/>
                        <span className='text-black text-xl font-medium'>Dashboard</span>
                    </Link>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>LISTS</span>
                </li>
                <li>
                    <Link to="/students" className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                        <FaIcons.FaBookReader className='text-black text-2xl'/>
                        <span className='text-black text-xl font-medium'>Students</span>
                    </Link>
                </li>
                <li className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                    <FaIcons.FaChalkboardTeacher className='text-black text-2xl'/>
                    <span className='text-black text-xl font-medium'>Teachers</span>
                </li>
                <li className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                    <FaIcons.FaUserShield className='text-black text-2xl'/>
                    <span className='text-black text-xl font-medium'>Officers</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>PROGRAMS</span>
                </li>
                <li className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                    <FiIcons.FiBookOpen className='text-black text-2xl'/>
                    <span className='text-black text-xl font-medium'>Courses</span>
                </li>
                <li className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                    <MdIcons.MdTimeline className='text-black text-2xl'/>
                    <span className='text-black text-xl font-medium'>Semesters</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>USER</span>
                </li>
                <li className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                    <BsIcons.BsPersonCircle className='text-black text-2xl'/>
                    <span className='text-black text-xl font-medium'>Profile</span>
                </li>
                <li>
                    <Link to="/login" className='flex gap-3 items-center pr-7 pl-2 mb-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                        <BiIcons.BiLogOutCircle className='text-black text-2xl'/>
                        <span className='text-black text-xl font-medium'>Logout</span>
                    </Link>
                </li>
            </ul>
        </div> 
        <hr className='mb-3 mt-6 mx-2'/>
        <div className="bottom px-2">
            <div className='text-gray-400 pl-2 pt-3 text-sm'>
                <span>SUPPORT</span>
            </div>
            <div className='flex gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                <MdIcons.MdHelpOutline className='text-black text-2xl'/>
                <span className='text-black text-xl font-medium'>Help</span>
            </div>
            <div className='flex w-full gap-3 items-center pr-7 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-hblue rounded-md cursor-pointer'>
                <MdIcons.MdInfoOutline className='text-black text-2xl'/>
                <span className='text-black text-xl font-medium'>About</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
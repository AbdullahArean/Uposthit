import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5"
import {Link} from 'react-router-dom';
import {SideBarData} from './sideBarData';
import './navBar.css';


function NavBar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  return (
    <div>
        <div className='navbar bg-blue-500 p-5 text-white'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar}/>
            </Link>
            <form class="absolute right-2 top-1.5 w-1/4">
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Search Students, Teachers, Courses..." required="" />
                    <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-white rounded-r-lg hover:text-blue-500 focus:ring-blue-500 focus:border-blue-500">
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </form>
        </div>
        <nav className={sidebar ? 'nav-menu active fixed top-0 pt-5 flex h-screen' : 'nav-menu flex fixed top-0 pt-5 h-screen'}>
            <ul className='nav-menu-items p-2 pt-0 text-xl text-left text-white bg-blue-500' onClick={showSideBar}>
                <li className='navbar-toggle pb-5 pl-3'>
                    <Link to='#' className='menu-bars'>
                        <IoIcons.IoCloseSharp/>
                    </Link>
                </li>
                {SideBarData.map((item, index) => {
                    return (
                        <li key={index} className= 'mb-6 mt-4 pl-3 pr-20 block rounded-lg hover:bg-white hover:text-black active:bg-white focus:bg-green-500'>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
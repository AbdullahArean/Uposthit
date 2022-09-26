import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
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
                        <li key={index} className= 'pb-4 pt-4 pl-3 pr-20 block rounded-lg hover:bg-white hover:text-black active:bg-white focus:bg-green-500'>
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
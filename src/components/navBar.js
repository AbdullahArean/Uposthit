import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs"
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
            <ul className='nav-menu-items pl-5 pr-20 text-xl text-left text-white bg-blue-500' onClick={showSideBar}>
                <li className='navbar-toggle pb-8'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SideBarData.map((item, index) => {
                    return (
                        <li key={index} className= 'pb-8'>
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
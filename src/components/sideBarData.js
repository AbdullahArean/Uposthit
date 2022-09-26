import React from 'react'
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";



export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdIcons.MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Students',
        path: '/students',
        icon: <MdIcons.MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Teachers',
        path: '/teachers',
        icon: <FaIcons.FaChalkboardTeacher />,
        cName: 'nav-text'
    },
    {
        title: 'Officers',
        path: '/officers',
        icon: <MdIcons.MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <MdIcons.MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Semesters',
        path: '/semesters',
        icon: <MdIcons.MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <MdIcons.MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
    },
];
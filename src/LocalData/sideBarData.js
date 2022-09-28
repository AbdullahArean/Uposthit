import React from 'react'
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdIcons.MdOutlineSpaceDashboard />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Students',
        path: '/students',
        icon: <MdIcons.MdPersonSearch />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Teachers',
        path: '/teachers',
        icon: <FaIcons.FaChalkboardTeacher />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Officers',
        path: '/officers',
        icon: <RiIcons.RiAdminLine />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <HiIcons.HiOutlineBookOpen />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Semesters',
        path: '/semesters',
        icon: <MdIcons.MdDateRange   />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <BsIcons.BsPersonCircle />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text',
        flex: 'true'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <MdIcons.MdHelpOutline />,
        cName: 'nav-text',
        flex: 'true',
        gap: 'true',
        bottom:'true'
    },
];
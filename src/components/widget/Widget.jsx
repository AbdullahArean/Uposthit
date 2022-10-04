import React from 'react'
import './Widget.css'
import * as HiIcons from 'react-icons/hi'

const Widget = () => {
  return (
    <div className='widget flex flex-1 mx-2 h-36 border'>
        <div className="left flex flex-col">
            <div className="title text-gray-400 pl-3 pt-3 text-sm">STUDENTS</div>
            <div className="counter text-gray-600 text-3xl pl-3">293</div>
            <div className="link text-violet-800 pl-3 mb-3 border-b w-max-content">See all students</div>
        </div>
        <div className="right flex flex-col">
            <div className="percentage">20%</div>
            <HiIcons.HiUserAdd/>
        </div>
    </div>
  )
}

export default Widget
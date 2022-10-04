import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as ImIcons from 'react-icons/im'

const Navbar = () => {
  return (
    <div className='navbar h-12 w-full flex items-center'>
      <div className="wrapper flex items-center">
        <div className="search flex max-w-56 p-1 ml-7 rounded items-center border hover:border-violet-800 shadow-sm">
          <input type="text" placeholder='Search...' className='border-none outline-none text-gray-600 bg-transparent'/>
          <ImIcons.ImSearch className='text-violet-800 mr-1 cursor-pointer'/>
        </div>
        <div className="items absolute right-8">
          <div className="item flex items-center">
          <span className='text-gray-600 mr-2'>John Doe</span>
          <BsIcons.BsPersonCircle className='text-violet-800'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
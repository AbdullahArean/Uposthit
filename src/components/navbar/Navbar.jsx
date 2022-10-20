import React from 'react'
import * as BsIcons from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar relative h-12 w-full flex items-center'>
      <form class="flex items-center">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full m-7">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" class=" focus:ring-0 ring-0 focus:border-blue bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10" placeholder="Search..." required=""/>
          </div>
      </form>
      <div className="items absolute right-8">
        <div className="item flex items-center">
          <span className='text-black mr-2'>John Doe</span>
          <BsIcons.BsPersonCircle className='text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
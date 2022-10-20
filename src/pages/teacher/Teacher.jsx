import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Axios from 'axios'


const Teacher = () => {
  

  return (
        <div className='flex'>

            <Sidebar/>
            <div className="homeContainer flex-1">
                <Navbar/>
                <hr className='mx-2 mb-3'/>
            </div>
        </div>
  )
}

export default Teacher
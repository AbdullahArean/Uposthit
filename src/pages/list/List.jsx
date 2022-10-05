import React from 'react'
import DataTable from '../../components/dataTable/StudentTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const List = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer flex-1">
        <Navbar/>
        <hr className='mx-2 mb-3'/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List
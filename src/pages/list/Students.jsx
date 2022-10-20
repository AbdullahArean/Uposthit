import React from 'react'
import DataTable from '../../components/dataTable/StudentTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect } from 'react'
import { getStudent } from '../../components/tableData/studentData'

const Students = () => {
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getStudent()
    return () => { ignore = true; }
    },[]);

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

export default Students
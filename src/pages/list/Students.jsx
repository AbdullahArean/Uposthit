import React, { useState } from 'react'
import DataTable from '../../components/dataTable/StudentTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect } from 'react'
import  Axios  from 'axios'

const Students = () => {

  const[data,setData] = useState([]);
  useEffect(() => {
    let ignore = false;

    
    if (!ignore){
      const getStudent = () => {


       Axios.get('http://localhost:3001/student')
             .then(response => {
                
                setData(response?.data);
             }).catch((err)=>
             {
              console.log(err);
             })
            
          
         
       }

       getStudent();
     
      
    } 
    return () => { ignore = true; }
    },[]);


  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer flex-1">
        <Navbar/>
        <hr className='mx-2 mb-3'/>
        <DataTable data={data}/>
      </div>
    </div>
  )
}

export default Students
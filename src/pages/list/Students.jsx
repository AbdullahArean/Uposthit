import React, { useState } from 'react'
import DataTable from '../../components/dataTable/StudentTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect } from 'react'
import { getStudent } from '../../components/tableData/studentData'
import  Axios  from 'axios'

const Students = () => {

  const[data,setData] = useState([]);
  useEffect(() => {
    let ignore = false;

    console.log('Called')
    
    if (!ignore){
      const getStudent = () => {


       const{data}= Axios.get('http://localhost:3001/student')
             .then(response => {
                 // console.log(response);
                 // let data = response.data;
                 // let goodData = JSON.parse(data);
                 // // rows(response);
                
                setData(response?.data);
                // console.log(response?.data)
                //  return response;
             }).catch((err)=>
             {
              console.log(err);
             })
            
          
         
       }

       getStudent();
     
      
    } 
    return () => { ignore = true; }
    },[]);

    console.log(data);

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
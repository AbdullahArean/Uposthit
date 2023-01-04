import React, { useState } from 'react'
import DataTable from '../../components/dataTable/StudentTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect } from 'react'
import  Axios  from 'axios'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


const Students = () => {

  const[data,setData] = useState([]);
  useEffect(() => {
    let ignore = false;

    
    if (!ignore){
      const getStudent = () => {


       Axios.get('/?getallstudents')
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

    const rows: GridRowsProp =  data;
    
    const columns: GridColDef[] = [
      { field: 's_name', headerName: 'Name', width: 200},
      { field: 'reg', headerName: 'Registration No.', width: 150 },
      { field: 's_roll', headerName: 'Roll', width: 70},
      { field: 's_semester', headerName: 'Current Semester', width: 150},
      { field: 's_mobile1',headerName: 'Primary Contact',width: 150},
      { field: 's_mail1',headerName: 'Primary Mail',width: 250},
      { field: 's_mobile2',headerName: 'Emergency Contact',width: 150,},
      { field: 's_mail2',headerName: 'Emergency Mail',width: 250}
    ];


  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer flex-1">
        <Navbar/>
        <hr className='mx-2 mb-3'/>
        {/* <DataTable data={data}/> */}
        <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
      </div>
    </div>
  )
}

export default Students
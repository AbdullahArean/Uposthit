import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { studentColumns, studentRows } from '../tableData/studentData';

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction grid grid-cols-2 w-full">
          <div className="viewButton flex items-center justify-center space-x-2">
            <p className='text-sm'>View</p>
            <FaIcons.FaShareSquare/>
          </div>
          <div className="deleteButton flex items-center justify-center space-x-2">
            <p className="text-sm">Delete</p>
            <AiIcons.AiFillDelete/>
          </div>
        </div>
      )
    }
  }
]

const DataTable = () => {
  return (
    <div className='h-full mx-7 my-6 border rounded-lg focus:ring-0 focus:border-none'>
      <DataGrid className=''
        rows={studentRows}
        columns={studentColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
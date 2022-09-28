import React from 'react'
import { StudentsData } from '../LocalData/studentsData'
import { Link } from 'react-router-dom'
import { StudentsColumns } from '../LocalData/studentsColumn'
import { StudentsTable } from '../components/studentsTable'

function Students() {
  return (
    <div className='students'>
        <StudentsTable />
    </div>
  )
}

export default Students
import React from 'react'

function Teachers() {
  return (
    <div className='teachers'>
    <h1>Teachers</h1>
    <div class="pl-4">
              <span class="inline-block bg-green-300 rounded-full px-2 py-1.5 text-sm font-semibold text-gray-700 mr-3 mb-2">Present: 30</span>
              <span class="inline-block bg-red-400 rounded-full px-2 py-1.5 text-sm font-semibold text-gray-700 mr-3 mb-2">Absent: 30</span>
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1.5 text-sm font-semibold text-gray-700 mr-3 mb-2">Percentage: 50%</span>
            </div>
    </div>
  )
}

export default Teachers
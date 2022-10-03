import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer flex-1">container</div>
    </div>
  )
}

export default Home
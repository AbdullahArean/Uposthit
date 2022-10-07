import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Single = () => {
  return (
    <div className='single flex'>
      <Sidebar/>
      <div className="homeContainer flex-1">
        <Navbar/>
        <hr className='mx-2 mb-3'/>
        <div className="top">
          <div className="left">
            <h1 className="name"></h1>
            <div className="student"><img src="" alt="" className="s_img" /></div>
          </div>
          <div className="right">
          </div>
        </div>
        <div className="bottom">
        </div>
      </div>
    </div>
  )
}

export default Single
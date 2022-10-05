import React from 'react'
import '../modal/CreateModal'
import './Widget.css'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SForm from '../form/SForm'
import OForm from '../form/OForm'
import TForm from '../form/TForm'
import CForm from '../form/CForm'
import SemForm from '../form/SemForm'


const Widget = ( {type} ) => {
  let data;
  switch (type){
    case "students":
      data = {
        title:'STUDENTS',
        counter:'232',
        link:'All Students',
        icon:<HiIcons.HiUserAdd className=''/>,
        isStudent: true
      };
      break;
    case "teachers":
      data = {
        title:'TEACHERS',
        counter:"232",
        link:"All Teachers",
        icon:<HiIcons.HiUserAdd className=''/>,
        isTeacher: true
      };
      break;
    case "officers":
      data = {
        title:'OFFICERS',
        counter:"232",
        link:"All Officers",
        icon:<HiIcons.HiUserAdd className=''/>,
        isOfficer: true
      };
      break;
    case "courses":
      data = {
        title:'COURSES',
        counter:"323",
        link:"All Courses",
        icon:<MdIcons.MdAddBox className=''/>,
        isCourse: true
      };
      break;
    case "semesters":
      data = {
        title:'SEMESTERS',
        counter:"323",
        link:"All Semesters",
        icon:<MdIcons.MdAddBox className=''/>,
        isSemester: true
      };
      break;
      default:
        break;
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(typeof(data.title));


  return (
      <div className='widget flex flex-1 mr-8 h-36 border rounded-lg shadow-lg'>
          <div className="left flex flex-col ml-3">
              <div className="title text-gray-500 mt-3 text-sm px-1 py-0.5">{data.title}</div>
              <div className="counter text-gray-600 text-3xl p-1">{data.counter}</div>
              <div className="link hover:bg-violet-200 rounded-md px-1 py-0.5 mb-3 text-sm cursor-pointer">{data.link}</div>
          </div>
          <div className="right flex flex-col justify-center items-center mr-4">
              <div className="percentage text-sm mt-3 ">20%</div>
              <div>
              <button className='text-xl mb-3 hover:bg-violet-200 rounded-full p-1.5'  onClick={handleOpen}>{data.icon}</button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}>
                  <Fade in={open}>
                    <div className='modal -translate-1/2 border rounded-xl shadow-xl bg-white p-12'>
                      <div id="transition-modal-description">
                        {data.isStudent ? <SForm/> : data.isTeacher ? <TForm/> : data.isOfficer ? <OForm/> : data.isCourse ? <CForm/> : data.isSemester ? <SemForm/> : 'undefined'}
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
          </div>
      </div>
  )
}

export default Widget
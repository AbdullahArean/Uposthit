import React from 'react'
import { useState } from 'react'
import '../modal/CreateModal'
import './Widget.css'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import CreateModal from '../modal/CreateModal'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Widget = ( {type} ) => {
  let data;
  switch (type){
    case "students":
      data = {
        title:'STUDENTS',
        counter:'232',
        link:'All Students',
        icon:<HiIcons.HiUserAdd className=''/>
      };
      break;
    case "teachers":
      data = {
        title:'TEACHERS',
        counter:"232",
        link:"All Teachers",
        icon:<HiIcons.HiUserAdd className=''/>
      };
      break;
    case "officers":
      data = {
        title:'OFFICERS',
        counter:"232",
        link:"All Officers",
        icon:<HiIcons.HiUserAdd className=''/>
      };
      break;
    case "courses":
      data = {
        title:'COURSES',
        counter:"323",
        link:"All Courses",
        icon:<MdIcons.MdAddBox className=''/>
      };
      break;
    case "semesters":
      data = {
        title:'SEMESTERS',
        counter:"323",
        link:"All Semesters",
        icon:<MdIcons.MdAddBox className=''/>
      };
      break;
      default:
        break;
  }

  // const [modalOn, setModalOn] = useState(false);
  // const clicked = () => {
  //   setModalOn(true);
  // }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <div className='widget flex flex-1 mr-8 h-36 border rounded-lg shadow-lg'>
          <div className="left flex flex-col ml-3">
              <div className="title text-gray-500 mt-3 text-sm px-1 py-0.5">{data.title}</div>
              <div className="counter text-gray-600 text-3xl p-1">{data.counter}</div>
              <div className="link hover:bg-violet-200 rounded-md px-1 py-0.5 mb-3 text-sm cursor-pointer">{data.link}</div>
          </div>
          <div className="right flex flex-col justify-center items-center mr-4">
              <div className="percentage text-sm mt-3 ">20%</div>
              <div>
              <button className='text-xl mb-3  hover:bg-violet-200 rounded-full p-1.5'  onClick={handleOpen}>{data.icon}</button>
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
                    <div className='absolute top-1/2 left-1/2 -translate-1/2 w-48 border shadow-xl bg-gray-400 p-4'>
                      <Typography id="transition-modal-title" variant="h6" component="h2">
                        Text in a modal
                      </Typography>
                      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                      </Typography>
                    </div>
                  </Fade>
                </Modal>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Widget
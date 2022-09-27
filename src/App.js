import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Courses from './pages/courses';
import Dashboard from './pages/dashboard';
import Help from './pages/help';
import Logout from './pages/logout';
import Officers from './pages/officers';
import Profile from './pages/profile';
import Semesters from './pages/semesters';
import Students from './pages/students';
import Teachers from './pages/teachers';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element = {<Dashboard />} />
          <Route path='/students' element = {<Students />} />
          <Route path='/teachers' element = {<Teachers />} />
          <Route path='/officers' element = {<Officers />} />
          <Route path='/courses' element = {<Courses />} />
          <Route path='/semesters' element = {<Semesters />} />
          <Route path='/profile' element = {<Profile />} />
          <Route path='/logout' element = {<Logout />} />
          <Route path='/help' element = {<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

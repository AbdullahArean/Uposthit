<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
include 'Entities.php';
$obj = new Entities();

if(isset($_GET['insertsemester'])){
  echo $obj->insertSemester();
}
if(isset($_GET['getAllsemester'])){
 echo $obj->getAllSemester();
}
if(isset($_GET['insertcourse'])){
    echo $obj->insertCourse();
  }
  if(isset($_GET['getAllcourse'])){
    echo $obj->getAllCourses();
  }
  if(isset($_GET['insertstudent'])){
    echo $obj->insertStudent();
  }

  if(isset($_GET['insertteacher'])){
    echo $obj->insertTeacher();
  }

  if(isset($_GET['insertofficer'])){
    echo $obj->insertOfficer();
  }


  if(isset($_GET['getallstudents'])){
    echo $obj->getAllStudents();
  }

  if(isset($_GET['getallofficers'])){
    echo $obj->getAllOfficers();
  }

  if(isset($_GET['insertlecture'])){
    echo $obj->insertLecture();
  }

  if(isset($_GET['getlecture']) && isset($_GET['course_id']))
  {
    $course_id = $_GET['course_id'];
    echo $obj->getLecture($course_id);
  }

  if(isset($_GET['getcourse']) && isset($_GET['sem_id']))
  {
    $sem_id = $_GET['sem_id'];
    echo $obj->getSemCourse($sem_id);
  }

  if(isset($_GET['getallteachers'])){
    echo $obj->getAllTeachers();
  }

  if(isset($_GET['getstudents']) && isset($_GET['sem_id']))
  {
    $sem_id = $_GET['sem_id'];
    echo $obj->getStudents($sem_id);
  }

  if(isset($_GET['insertcourseassign'])){
    echo $obj->insertCourseTakes();
  }

  if(isset($_GET['getteachers']) && isset($_GET['course_id']))
  {
    $course_id = $_GET['course_id'];
    echo $obj->getTeachers($course_id);
  }


  if(isset($_GET['insertattendance'])){
    echo $obj->insertAttendance();
  }

  if(isset($_GET['updateattendance'])){
    echo $obj->updateAttendance();
  }


  if(isset($_GET['insertuser']) && isset($_GET['username']) && isset($_GET['password']))
  {
    $username = $_GET['username'];
    $password = $_GET['password'];
    echo $obj->insertUser($username, $password);
    
  }

  if(isset($_GET['insertsemesterassign'])){
    echo $obj->insertEnrollSemester();
  }

  if(isset($_GET['getstudentsforattendance']) && isset($_GET['s_reg']))
  {
    $s_reg = $_GET['s_reg'];
    echo $obj->getStudentsForAttendance($s_reg);
  }

  if(isset($_GET['viewattendance']) && isset($_GET['c_code']))
  {
    $c_code = $_GET['c_code'];
    echo $obj->viewAttendance($c_code);
  }

  if(isset($_GET['viewpresence']))
  {
    echo $obj->viewPresence();
  }

  if(isset($_GET['getpresence']) && isset($_GET['l_id']))
  {
    $l_id = $_GET['l_id'];
    echo $obj->viewPresence($l_id);
  }










/*cd api
  php -S 127.0.0.1:8000 api.php */
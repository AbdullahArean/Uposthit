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


  if(isset($_GET['getallstudents'])){
    echo $obj->getAllStudents();
  }

  if(isset($_GET['insertlecture'])){
    echo $obj->insertLecture();
  }

  if(isset($_GET['getlecture']) && isset($_GET['course_id']))
  {
    $course_id = $_GET['course_id'];
    echo $obj->getLecture($course_id);
  }

  if(isset($_GET['getallteachers'])){
    echo $obj->getAllTeachers();
  }




/*cd api
  php -S 127.0.0.1:8000 api.php */
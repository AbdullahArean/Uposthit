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
  if(isset($_GET['getallstudents'])){
    echo $obj->getAllStudents();
  }

/*cd api
  php -S 127.0.0.1:8000 api.php */
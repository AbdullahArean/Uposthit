<?php

class Entities
{
    public  $conn;
    function  __construct()
    {
        require 'Conn.php';
        $this->conn =  mysqli_connect($host, $username, $password, $dbname);
        $this->conn->set_charset("utf8");
    }
    public function insertSemester()
    {
        if (isset($_POST['semester_name']) && isset($_POST['s_year']) && isset($_POST['s_semester'])) {
            $semester_name =  $_POST['semester_name'];
            $s_year =   $_POST['s_year'];
            $s_semester =  $_POST['s_semester'];
            $insertSql = "INSERT INTO `semesters`(  `semester_name`, `s_year`, `s_semester`) VALUES ('" . $semester_name . "','" . $s_year . "', '" . $s_semester . "' )";
            if (mysqli_query($this->conn, $insertSql)) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    public function getAllSemester()
    {
        $selectdata = "SELECT * FROM `semesters`";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    
    public function getAllCourses()
    {
        $selectdata = "SELECT * FROM `courses`";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }

    




    public function insertStudent()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $semester_id =  $data->semester_id;
            $s_name =   $data->s_name;
            $reg =  $data->reg;
            $class_roll =  $data->class_roll;
            $p_contact =   $data->p_contact;
            $p_email =  $data->p_email;
            $e_contact =  $data->e_contact;
            $e_email =   $data->e_email;
            if( $semester_id!=0){
                $insertSql = "INSERT INTO `students`( `semester_id`, `s_name` , `reg`, `class_roll`, `p_contact`, `p_email`, `e_contact`, `e_email`) VALUES ( '" . $semester_id . "','" . $s_name . "'  , '" . $reg . "' , '" . $class_roll . "' , '" . $p_contact . "', '" . $p_email . "' , '" . $e_contact . "' , '" . $e_email . "'  )";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
            }
     
        }
      
       
    }

    public function insertCourse()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $course_code =  $data->course_code;
            $course_name =   $data->course_name;
            $semester_id =  $data->semester_id;
            $course_credit=  $data->course_credit;
            
            if( $semester_id!=0){
                $insertSql = "INSERT INTO `courses`( `course_code`, `semester_id` , `course_name`, `course_credit`) VALUES ( '" . $course_code . "','" . $semester_id . "'  , '" . $course_name . "' , '" . $course_credit . "'  )";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
            }
     
        }
      
       
    }


    public function insertLecture()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            // $lecture_id =  $data->lecture_id;
            // $teacher_id =   $data->teacher_id;
            $course_id =  $data->course_id;
            $lecture_topic=  $data->lecture_topic;
            $lecture_date=  $data->lecture_date;
            $lecture_time=  $data->lecture_time;

                $insertSql = "INSERT INTO `lectures`( `course_id`, `lecture_topic` , `lecture_date`, `lecture_time`) VALUES ( '" . $course_id . "','" . $lecture_topic . "'  , '" . $lecture_date . "' , '" . $lecture_time . "'  )";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
     
        }
      
       
    }

    public function getAllStudents()
    {
        $selectdata = "SELECT `s_id` as id,`semester_id`,`s_name` ,`reg`,`class_roll`,`p_contact`,`p_email`,`e_contact`,`e_email` FROM `students`;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    public function getAllTeachers()
    {
        $selectdata = "SELECT `t_id` as id,`t_name`,`t_code`,`t_designation` ,`t_contact`,`t_email`,`t_deptname` FROM `teachers`;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all); 
    }

    

    public function getLecture($course_id)
    {
        $selectdata = "SELECT * FROM lectures where course_id = '$course_id';";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }

    public function insertTeacher()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $t_code =  $data->t_code;
            $t_name =   $data->t_name;
            $t_designation =  $data->t_designation;
            $t_contact =  $data->t_contact;
            $t_email =   $data->t_email;
            $t_deptname =  $data->t_deptname;

            $insertSql = "INSERT INTO `teachers`( `t_code`, `t_name` , `t_designation`, `t_contact`, `t_email`, `t_deptname`) VALUES ( '" . $t_code . "','" . $t_name . "'  , '" . $t_designation . "' , '" . $t_contact . "' , '" . $t_email . "', '" . $t_deptname . "')";
            if (mysqli_query($this->conn, $insertSql))
             {
                return 1;
            } else {
                       return 0;
                   }
        }
      
       
    }


    public function getStudents($semester_id)
    {
        $selectdata = "SELECT * FROM students where semester_id = '$semester_id';";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    public function insertCourseTakes()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $teacher_id =   $data->teacher_id;
            $course_id =  $data->course_id;

                $insertSql = "INSERT INTO `course_takes`( `course_id`,  `teacher_id` ) VALUES ( '" . $course_id . "','" . $teacher_id . "')";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
     
        }
      
       
    }


    public function insertAttendance()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $student_id =   $data->student_id;
            $teacher_id =  $data->teacher_id;
            $course_id =  $data->course_id;
            $lecture_id =  $data->lecture_id;
            $date =  $data->date;
            $ispresent =  $data->ispresent;
            $s_name =  $data->s_name;
            $class_roll =  $data->class_roll;


                $insertSql = "INSERT INTO `attendances`( `student_id`,  `teacher_id`, `course_id`,`lecture_id`,`date`,`ispresent`,`s_name`,`class_roll`) VALUES ('" . $student_id . "','" . $teacher_id . "','" . $course_id . "','" . $lecture_id . "','" . $date . "','" . $ispresent . "','" . $s_name . "','" . $class_roll . "')";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
     
        }
      
       
    }

    public function getTeachers($course_id)
    {
        $selectdata = "SELECT * FROM course_takes where course_id = '$course_id';";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    public function updateAttendance()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $student_id =   $data->student_id;
            $date =  $data->date;
            

            $insertSql= "UPDATE `attendances` 
            SET `ispresent`  = 1
            WHERE `student_id` = '" . $student_id . "' AND `date` = '" . $date . "';";
                
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
                
     
        }
      
       
    }





    
}

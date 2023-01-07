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
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            $data = json_decode($postdata) ;
            
            $sem_code =  $data->sem_code;
            $sem_name =   $data->sem_name;
            $sem_year = $data->sem_year;
            $sem_running = $data->sem_running;
            $o_code =  $data->o_code;

            $insertSql = "INSERT INTO `semesters`(  `sem_code`, `sem_name`, `sem_year`, `sem_running`, `o_code` ) VALUES ('" . $sem_code . "','" . $sem_name . "', '" . $sem_year . "','" . $sem_running . "','" . $o_code . "')";
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
            $s_name =   $data->s_name;
            $s_reg =  $data->s_reg;
            $s_classroll =  $data->s_classroll;
            $s_contact =   $data->s_contact;
            $s_email =  $data->s_email;
            $s_contact2 =  $data->s_contact2;
            $s_email2 =   $data->s_email2;

                $insertSql = "INSERT INTO `students`(`s_name` , `s_reg`, `s_classroll`, `s_contact`, `s_email`, `s_contact2`, `s_email2`) VALUES ('" . $s_name . "'  , '" . $s_reg . "' , '" . $s_classroll . "' , '" . $s_contact . "', '" . $s_email . "' , '" . $s_contact2 . "' , '" . $s_email2 . "'  )";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
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
            $teacher_id =   $data->teacher_id;
            $course_id =  $data->course_id;
            $lecture_topic=  $data->lecture_topic;
            $lecture_date=  $data->lecture_date;
            $lecture_time=  $data->lecture_time;

                $insertSql = "INSERT INTO `lectures`( `course_id`, `lecture_topic` , `lecture_date`, `lecture_time`, `teacher_id`) VALUES ( '" . $course_id . "','" . $lecture_topic . "'  , '" . $lecture_date . "' , '" . $lecture_time . "'  , '" . $teacher_id . "'  )";
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
            $t_des =  $data->t_des;
            $t_contact =  $data->t_contact;
            $t_email =   $data->t_email;
            $t_dept =  $data->t_dept;

            $insertSql = "INSERT INTO `teachers`( `t_code`, `t_name` , `t_des`, `t_contact`, `t_email`, `t_dept`) VALUES ( '" . $t_code . "','" . $t_name . "'  , '" . $t_des . "' , '" . $t_contact . "' , '" . $t_email . "', '" . $t_dept . "')";
            if (mysqli_query($this->conn, $insertSql))
             {
                return 1;
            } else {
                       return 0;
                   }
        }
      
       
    }


    public function insertOfficer()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $o_code =  $data->o_code;
            $o_name =   $data->o_name;
            $o_des =  $data->o_des;
            $o_contact =  $data->o_contact;
            $o_email =   $data->o_email;

            $insertSql = "INSERT INTO `officers`( `o_code`, `o_name` , `o_des`, `o_contact`, `o_email`) VALUES ( '" . $o_code . "','" . $o_name . "'  , '" . $o_des . "' , '" . $o_contact . "' , '" . $o_email . "')";
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

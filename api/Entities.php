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
            $c_code =  $data->c_code;
            $c_name =   $data->c_name;
            $sem_id =  $data->sem_id;
            $c_credit=  $data->c_credit;
            
            if( $sem_id!=0){
                $insertSql = "INSERT INTO `courses`( `c_code`, `sem_id` , `c_name`, `c_credit`) VALUES ( '" . $c_code . "','" . $sem_id . "'  , '" . $c_name . "' , '" . $c_credit . "'  )";
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
            $t_code =   $data->t_code;
            $sem_id =   $data->sem_id;
            $c_code =  $data->c_code;
            $l_topic=  $data->l_topic;
            $l_date=  $data->l_date;
            $l_time=  $data->l_time;

                $insertSql = "INSERT INTO `lectures`( `c_code`,`sem_id`, `l_topic` , `l_date`, `l_time`, `t_code`) VALUES ( '" . $c_code . "','" . $sem_id . "','" . $l_topic . "'  , '" . $l_date . "' , '" . $l_time . "'  , '" . $t_code . "'  )";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
     
        }
      
       
    }

    public function getAllStudents()
    {
        $selectdata = "SELECT `s_reg` as id,`s_name` ,`s_classroll`,`s_contact`,`s_email`,`s_contact2`,`s_email2` FROM `students` ORDER BY students.s_classroll ASC";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }

    public function getAllTeachers()
    {
        $selectdata = "SELECT `t_code` as id,`t_name`,`t_des` ,`t_contact`,`t_email`,`t_dept` FROM `teachers`;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all); 
    }

    public function getAllOfficers()
    {
        $selectdata = "SELECT `o_code` as id,`o_name` ,`o_des`,`o_contact`,`o_email` FROM `officers`;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }

    

    public function getLecture($c_code)
    {
        $selectdata = "SELECT * FROM lectures where c_code = '$c_code' ORDER BY l_id ASC;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }

    public function getSemCourse($sem_id)
    {
        $selectdata = "SELECT * FROM courses
        WHERE courses.sem_id = '$sem_id';";
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


    public function getStudents($sem_id)
    {
        // $selectdata = "SELECT s_reg FROM enrolls where sem_id = '$sem_id';";

        $selectdata = "SELECT s_reg, s_name, s_classroll from students NATURAL JOIN enrolls where sem_id = '$sem_id' ORDER BY s_classroll ASC ";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    public function insertCourseTakes()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $t_code =   $data->t_code;
            $c_code =  $data->c_code;
            $sem_id = $data->sem_id;

                $insertSql = "INSERT INTO `teaches`( `c_code`,  `t_code`, `sem_id` ) VALUES ( '" . $c_code . "','" . $t_code . "','" . $sem_id . "')";
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
            $s_reg =   $data->s_reg;
            $l_id =  $data->l_id;
            $presence =  $data->presence;


                $insertSql = "INSERT INTO `attendances`( `s_reg`,  `l_id`, `presence`) VALUES ('" . $s_reg . "','" . $l_id . "','" . $presence . "')";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
     
        }
      
    }

    public function getTeachers($c_code)
    {
        $selectdata = "SELECT * FROM teaches where c_code = '$c_code';";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    public function updateAttendance()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $s_reg =   $data->s_reg;
            $l_id =   $data->l_id;
            

            $insertSql= "UPDATE `attendances` 
            SET `presence`  = 1
            WHERE `s_reg` = '" . $s_reg . "' && `l_id` = '" . $l_id . "'  ;";
                
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
                
     
        }
      
       
    }

    public function insertEnrollSemester()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $s_reg =   $data->s_reg;
            $sem_id = $data->sem_id;

                $insertSql = "INSERT INTO `enrolls`( `s_reg`, `sem_id` ) VALUES ( '" . $s_reg . "','" . $sem_id . "')";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
     
        }
      
       
    }

    public function getStudentsForAttendance($s_reg)
    {
        $selectdata = "SELECT s_name, s_classroll FROM students where s_reg = '$s_reg';";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }


    public function viewAttendance($c_code)
    {
        $selectdata = "SELECT students.s_reg, students.s_name, students.s_classroll, teachers.t_code, group_concat(attendances.presence order by attendances.l_id) as presence, group_concat(attendances.l_id order by attendances.l_id) as l_id, group_concat(lectures.l_date order by attendances.l_id) as l_date
        FROM students
        JOIN enrolls ON students.s_reg = enrolls.s_reg
        JOIN lectures ON enrolls.sem_id = lectures.sem_id
        JOIN courses ON courses.c_code = lectures.c_code AND courses.sem_id = lectures.sem_id
        JOIN teaches ON lectures.c_code = teaches.c_code AND lectures.sem_id = teaches.sem_id
        JOIN teachers ON teaches.t_code = teachers.t_code
        JOIN attendances ON attendances.s_reg = students.s_reg AND attendances.l_id = lectures.l_id
        WHERE courses.c_code = '$c_code'
        GROUP BY students.s_reg, students.s_name, students.s_classroll, teachers.t_code
        ORDER BY students.s_classroll ASC;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }

    public function getpresence($l_id)
    {
        $selectdata = "SELECT attendances.presence FROM attendances
        JOIN students ON attendances.s_reg = students.s_reg
        WHERE attendances.l_id = '$l_id'
        ORDER BY students.s_classroll ASC;";
        $result = mysqli_query($this->conn, $selectdata);
        $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
        return json_encode($all);
    }



    public function insertUser()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            $data = json_decode($postdata) ; 
            $username =   $data->username;
            $password =  $data->password;
            $hash = password_hash($password, PASSWORD_DEFAULT);

            $sql = "SELECT * FROM login WHERE username = '$username' ";

            $res = mysqli_query($this->conn, $sql);
            $rowCount = mysqli_num_rows($res);


            $sql1 = "SELECT * FROM students WHERE s_reg = '$username' ";

            $res1 = mysqli_query($this->conn, $sql1);
            $rowCount1 = mysqli_num_rows($res1);


            $sql2 = "SELECT * FROM teachers WHERE t_code = '$username' ";

            $res2 = mysqli_query($this->conn, $sql2);
            $rowCount2 = mysqli_num_rows($res2);

            $sql3 = "SELECT * FROM officers WHERE o_code = '$username' ";

            $res3 = mysqli_query($this->conn, $sql3);
            $rowCount3 = mysqli_num_rows($res3);

            if($rowCount>0 &&  $rowCount1==0 &&  $rowCount2==0 &&  $rowCount3==0 )
            {
                return 0;
            }

            else if(!empty($username)){
                    $insertSql = "INSERT INTO `login`( `username`,  `password`) VALUES ('" . $username . "','" . $hash . "')";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
                    
                }
        }
    }

    public function changePassword()
    {  
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            
            $data = json_decode($postdata) ; 
            $username =   $data->username;
            $oldpassword =  $data->oldpassword;
            $newpassword =  $data->newpassword;

            $sql = "SELECT password FROM login WHERE username = '$username' ";
            $res = mysqli_query($this->conn, $sql);
            $row = mysqli_fetch_array($res);

            if(password_verify($oldpassword, $row['password']))
            {
                $hash = password_hash($newpassword, PASSWORD_DEFAULT);
                $insertSql= "UPDATE `login` SET `password`  = '$hash' WHERE `username` = '" . $username . "';";
                
                if (mysqli_query($this->conn, $insertSql))
                {
                    return 1;
                } 
                else 
                {
                    return 0;
                }

            }
            else
            {
                return 0;
            }      
    }
}

public function loginUser()
    {
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            $data = json_decode($postdata) ; 
            $username =   $data->username;
            $password =  $data->password;

            $sql = "SELECT password FROM login WHERE username = '$username' ";

            $res = mysqli_query($this->conn, $sql);
            $row = mysqli_fetch_array($res);
            

            // $rowCount = mysqli_num_rows($res);

            if(password_verify($password, $row['password']))
            {
                return 1;
            }
            else
            {
                return 0;
            }
                
            }
        }

        
        public function getUser($id)
        {
            $selectdata = "SELECT name, id, email FROM (
                SELECT s_reg as id, s_name as name, s_email as email FROM students
                UNION
                SELECT t_code as id, t_name as name, t_email as email FROM teachers
                UNION
                SELECT o_code as id, o_name as name, o_email as email FROM officers
                ) as users
                WHERE id = '$id';";
            $result = mysqli_query($this->conn, $selectdata);
            $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
            return json_encode($all);
        }

        public function getAttendancePercentage($c_code)
        {
            $selectdata = "SELECT lectures.l_id, (SUM(CASE WHEN attendances.presence = 1 THEN 1 ELSE 0 END) / COUNT(lectures.l_id)) * 100 AS 'Presence Percentage'
            FROM lectures
            JOIN attendances ON lectures.l_id = attendances.l_id
            WHERE lectures.c_code = '$c_code'
            GROUP BY lectures.l_id;";
            $result = mysqli_query($this->conn, $selectdata);
            $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
            return json_encode($all);
        }


        public function getPercentageForCourse($c_code)
        {
            $selectdata = "SELECT attendances.s_reg, (SUM(CASE WHEN attendances.presence = 1 THEN 1 ELSE 0 END) / COUNT(attendances.s_reg)) * 100 AS 'Presence Percentage'
            FROM attendances
            JOIN lectures ON attendances.l_id = lectures.l_id
            JOIN students ON attendances.s_reg = students.s_reg
            WHERE lectures.c_code = '$c_code'
            GROUP BY attendances.s_reg
            ORDER BY students.s_classroll asc;";
            $result = mysqli_query($this->conn, $selectdata);
            $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
            return json_encode($all);
        }


        public function getStudentStat($c_code, $s_reg)
        {
            $selectdata = "SELECT courses.c_code, courses.c_name, courses.c_credit, students.s_name, students.s_classroll, (SUM(CASE WHEN attendances.presence = 1 THEN 1 ELSE 0 END) / COUNT(attendances.s_reg)) * 100 AS 'Presence Percentage'
            FROM attendances
            JOIN lectures ON attendances.l_id = lectures.l_id
            JOIN students ON attendances.s_reg = students.s_reg
            JOIN courses ON lectures.c_code = courses.c_code
            WHERE lectures.c_code = '$c_code' AND attendances.s_reg = '$s_reg'
            GROUP BY courses.c_code, students.s_reg;";
            $result = mysqli_query($this->conn, $selectdata);
            $all = mysqli_fetch_all($result, $resulttype = MYSQLI_ASSOC);
            return json_encode($all);
        }
    }



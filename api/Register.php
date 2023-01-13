<?php
if($_SERVER ["REQUEST_METHOD"] == "POST")
{

    include "Conn.php";
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM 'login' WHERE username = '$username' ";

            $res = mysqli_query($conn, $sql);
            $rowCount = mysqli_num_rows($res);

            if($rowCount>0)
            {
                 return 0;
            }
            else
            {
                $insertSql = "INSERT INTO `login`( `username`,  `password`) VALUES ('" . $username . "','" . $password . "')";
                if (mysqli_query($this->conn, $insertSql)) {
                       return 1;
                   } else {
                       return 0;
                   }
            }
}
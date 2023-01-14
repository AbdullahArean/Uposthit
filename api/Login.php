<?php

$login = false;
session_start();
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: home.php");
    exit;
}

if($_SERVER ["REQUEST_METHOD"] == "POST")
{

    include "Conn.php";
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM 'login' WHERE username = '$username' AND password = '$password' ";
    $res = mysqli_query($conn, $sql);
    $rowCount = mysqli_num_rows($res);

            if($rowCount==1)
            {
                 $login = true;
                 session_start();
                 $_SESSION['loggedin'] = true;
                 $_SESSION['username'] = $username;
                 

                 header("location: home.php");
            }
            else
            {
                return 0;
            }
}
?>
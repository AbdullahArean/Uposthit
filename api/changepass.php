<?php
session_start();
 
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: Login.php");
    exit;
}
 

require_once "Conn.php";
 
$new_password = $confirm_password = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){

    $password = password_hash($_POST["password"],PASSWORD_DEFAULT);
    $username = $_SESSION["username"];

    $insertSql= "UPDATE `login` 
            SET `password`  = $password
            WHERE `username` = '" . $username . "';";
                
                if (mysqli_query($this->conn, $insertSql)) {
                       session_destroy();
                       header("location: Login.php" );

                   } else {
                       return 0;
                   }


}
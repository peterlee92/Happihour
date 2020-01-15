<?php

require_once('./Data.php');

$json = file_get_contents('php://input');

$obj = json_decode($json,true);
 
$username = $obj['username'];
$email = $obj['email'];
$address = $obj['address'];
$password = $obj['password'];
$checkpassword = $obj['checkpassword'];

if($username !== ''){
        $result = $conn->query("SELECT * FROM users WHERE username='$username'");

        if($result->num_rows>0){
            echo json_encode('The username already exist');
        }else{
            if($password == $checkpassword){
                $add = $conn->query("
                INSERT INTO users
                (username, email, address, password)
                VALUES ('$username', '$email', '$address', '$password')
                ");

                if($add){
                    echo json_encode('Registered successfully. Please Login!');
                }else{
                    echo json_encode('Check internet connection');
                }
            }else{
                echo json_encode('Password not matched');
            }
            
        }
    
    
}


mysqli_close($conn);
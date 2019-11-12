<?php

$conn = mysqli_connect("localhost","root","","Happihour");

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$username = $obj['username'];
$password = $obj['password'];

if($username != ''){
    $sql = "
        SELECT * FROM users WHERE username = '$username' and password = '$password'
    ";
    $result = $conn->query($sql);
    if($result->num_rows==0){
        echo json_encode('Your information is incorrect');
    }else {
        echo json_encode('ok');
    }
};
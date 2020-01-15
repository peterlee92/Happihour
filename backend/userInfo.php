<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$userid = $obj['user_id'];

$sql = "SELECT * FROM users WHERE Id = $userid ";
    $result = $conn->query($sql);
    if($result->num_rows==0){
        echo json_encode('Your information is incorrect');
    }else {
        echo json_encode(mysqli_fetch_assoc($result));
};
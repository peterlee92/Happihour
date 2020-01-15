<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$rest_name = mysqli_real_escape_string($conn,$obj['restaurantname']);


    $result = mysqli_query($conn,"SELECT url, contact, latitude, longtitude, img1, happyhours FROM restaurants WHERE name = '$rest_name' ");

    // echo json_encode(mysqli_fetch_assoc($result));
if(mysqli_num_rows($result)){
    echo json_encode(mysqli_fetch_assoc($result));
}else {
    echo json_encode("wrong");
}
 
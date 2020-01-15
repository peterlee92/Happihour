<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$user_id = $obj['user_id'];
$restaurantname = $obj['restaurantname'];

$getid = mysqli_fetch_assoc($conn->query("SELECT id FROM restaurants WHERE name = '$restaurantname'"));
$restaurant_id = $getid['id'];

$result = mysqli_fetch_assoc($conn->query("SELECT * FROM favourites WHERE user_id = $user_id AND restaurant_id = $restaurant_id AND deleted=false"));


if($result){
    echo json_encode("yes");
}else{
    echo json_encode("no");
}
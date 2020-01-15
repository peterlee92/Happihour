<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$user_id = $obj['user_id'];
// $user_id = 1;

$result = mysqli_query($conn,"SELECT restaurants.name, restaurants.address, img1, img2 FROM users JOIN favourites ON users.id=favourites.user_id JOIN restaurants ON favourites.restaurant_id = restaurants.id WHERE user_id=$user_id AND favourites.deleted = false GROUP BY restaurants.name");

if(mysqli_num_rows($result)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
    }
    echo json_encode($rows);
}else {
    echo json_encode("wrong");
}
<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$user_id = $obj['user_id'];
$restaurantname = $obj['restaurantname'];

$getid = mysqli_fetch_assoc($conn->query("SELECT id FROM restaurants WHERE name = '$restaurantname'"));
$restaurant_id = $getid['id'];

$check = $conn->query("SELECT * FROM favourites WHERE user_id = $user_id AND restaurant_id = $restaurant_id AND deleted = true");

if($check->num_rows>0){
    $add = $conn->query("UPDATE favourites SET deleted = false WHERE user_id = $user_id AND restaurant_id = $restaurant_id ");
}else{
    $add = $conn->query("INSERT INTO favourites (user_id, restaurant_id) VALUES($user_id, $restaurant_id)");
}

if ($check === TRUE) {
    echo "added";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
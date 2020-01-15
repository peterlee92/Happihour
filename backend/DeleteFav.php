<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$user_id = $obj['user_id'];
$restaurantname = $obj['restaurantname'];

$getid = mysqli_fetch_assoc($conn->query("SELECT id FROM restaurants WHERE name = '$restaurantname'"));
$restaurant_id = $getid['id'];

$delete = $conn->query("UPDATE favourites SET deleted = true WHERE user_id = $user_id AND restaurant_id = $restaurant_id; ");


if ($delete === TRUE) {
    echo json_encode("Record updated successfully");
} else {
    echo json_encode("Error updating record: " . $conn->error);
}

$conn->close();
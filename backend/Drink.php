<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$rest_name = mysqli_real_escape_string($conn,$obj['rest_name']);

$drink_result = mysqli_query($conn,"SELECT drink.name, drink.price FROM restaurants JOIN drink ON restaurants.id = restaurant_id WHERE restaurants.name = '$rest_name'");

if(mysqli_num_rows($drink_result)){
    $drink_rows = array();
    while($drinkrow = mysqli_fetch_assoc($drink_result)){
        array_push($drink_rows, $drinkrow);
    }
    echo json_encode($drink_rows);
}else { 
    echo json_encode("no");
} 
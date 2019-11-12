<?php

$conn = mysqli_connect("localhost","root","","Happihour");

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$rest_name = $obj['rest_name'];

$food_result = mysqli_query($conn,"SELECT restaurants.address, Food.name, Food.price FROM restaurants JOIN Food ON restaurants.id = restaurant_id WHERE restaurants.name = '$rest_name'");


if(mysqli_num_rows($food_result)){
    $food_rows = array();
    while($foodrow = mysqli_fetch_assoc($food_result)){
        array_push($food_rows, $foodrow);
    }
    echo json_encode($food_rows);
}else {
    echo json_encode("wrong");
}
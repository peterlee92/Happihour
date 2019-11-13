<?php

$conn = mysqli_connect("localhost","root","","Happihour");

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$rest_name = $obj['rest_name'];

$drink_result = mysqli_query($conn,"SELECT Drink.name, Drink.price FROM restaurants JOIN Drink ON restaurants.id = restaurant_id WHERE restaurants.name = '$rest_name'");


if(mysqli_num_rows($drink_result)){
    $drink_rows = array();
    while($drinkrow = mysqli_fetch_assoc($drink_result)){
        array_push($drink_rows, $drinkrow);
    }
    echo json_encode($drink_rows);
}else {
    echo json_encode("wrong");
}
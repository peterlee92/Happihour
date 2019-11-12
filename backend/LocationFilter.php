<?php

$conn = mysqli_connect("localhost","root","","Happihour");

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$location = $obj['location'];



$result = mysqli_query($conn,"SELECT restaurants.address FROM restaurants JOIN happyhours ON restaurants.id = restaurant_id WHERE location = '$location' ");

if(mysqli_num_rows($result)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
    }
    echo json_encode($rows);
}else {
    echo json_encode("wrong");
}
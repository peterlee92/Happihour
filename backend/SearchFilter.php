<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$search = $obj['search'];



try {
    $result = mysqli_query($conn,"SELECT restaurants.name, restaurants.address, latitude, longtitude, img1, img2, happyhours FROM restaurants WHERE name LIKE '%$search%' or address LIKE '%$search%'");
} catch (Exception $e) {
    var_dump($e);
}
    
if(mysqli_num_rows($result)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
    }
    echo json_encode($rows);
}else {
    echo json_encode("wrong");
}
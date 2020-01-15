<?php

require_once('./Data.php');

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$C_day = $obj['C_day'];
$C_time = $obj['C_time'];
$C_location = $obj['C_location'];


if($C_location == ''){
    $AC_location = true;
}else{
    $AC_location = "restaurants.location = '$C_location' ";
}

if($C_day == ''){
    $AC_day = true;
}else{
    $AC_day = "day LIKE '%$C_day%'";

}

if($C_time == ''){
    $AC_time = true;
}else{
    $AC_time = "start <= '$C_time' AND '$C_time' <= end";
 
}


try{
    $result = mysqli_query($conn,"SELECT restaurants.name, restaurants.address, latitude, longtitude, img1, img2, happyhours FROM restaurants JOIN happyhours ON restaurants.id = restaurant_id WHERE $AC_day AND $AC_time AND $AC_location GROUP BY restaurants.name");
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

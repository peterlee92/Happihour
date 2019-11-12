<?php

$conn = mysqli_connect("localhost","root","","Happihour");

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$C_day = $obj['C_day'];
$C_hour = $obj['C_hour'];
$C_minute = $obj['C_minute'];

// if($C_day == "0"){
//     $C_day = "Sun";
// }else if($C_day == "1"){
//     $C_day = 'Mon';
// }else if($C_day == "2"){
//     $C_day = 'Tue';
// }else if($C_day == "3"){
//     $C_day = 'Wed';
// }else if($C_day == "4"){
//     $C_day = 'Thur';
// }else if($C_day == "5"){
//     $C_day = 'Fri';
// }else{
//     $C_day = 'Sat';
// }

$result = mysqli_query($conn,"SELECT restaurants.address FROM restaurants JOIN happyhours ON restaurants.id = restaurant_id WHERE day = '$C_day' AND start <= '$C_hour:$C_minute' <= end; ");

if(mysqli_num_rows($result)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
    }
    echo json_encode($rows);
}else {
    echo json_encode("wrong");
}
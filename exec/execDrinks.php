<?php
include '../config.php';
 
$conn = new mysqli($host, $user, $password, $database);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 

// $rest_id =  $obj['rest_name'];
$rest_id =  1;

$sql = "SELECT drinks.name, drinks.price FROM restaurants JOIN drinks ON restaurants.id = restaurant_id WHERE restaurants.id = $rest_id";
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $info = $row;
 
 $json = json_encode($info);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>
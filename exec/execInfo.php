<?php
include '../config.php';
 
$conn = new mysqli($host, $user, $password, $database);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 

// $rest_id =  $obj['rest_name'];
// $rest_id =  1;
$rest_name = 'Corduroy';

$sql = "SELECT * FROM restaurants WHERE name = '$rest_name'";
 
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
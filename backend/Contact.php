<?php

require_once('./Database.php');

$conn = mysqli_connect("localhost","root","root","Happihour");

// Checks if emergency contact exists

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $sql = "SELECT contact FROM contacts WHERE user_id = 1";

    $result = runQuery($sql);

    if($result == null){
      echo json_encode('none');
    } else{
      echo json_encode($result);
    }

  } else
  // Adds emergency contact information to database
  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $name = $obj['name'];
    $contact = $obj['contact'];
    $user_id = $obj['user_id'];

    $sql = "SELECT contact FROM contacts WHERE user_id = 1";

    $result = runQuery($sql);

    if($results == null){
      $sql = "INSERT INTO Contacts(user_id, name, contact) VALUES (1, '$name', '$contact')";

      $result = runQuery($sql);

      echo json_encode('success');
    } else {
      $sql = "UPDATE Contacts SET 'name' = '$name', 'contact' = '$contact' WHERE user_id = 1";
      $result = runQuery($sql);
      echo json_encode('success');
    }
  }
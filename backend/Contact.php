<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $conn = mysqli_connect("localhost","root","","Happihour");

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $user_id = $obj['user_id'];

    $contact = mysqli_query($conn,"SELECT contact FROM contacts WHERE user_id = '$user_id'");
  } else
  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $conn = mysqli_connect("localhost","root","","Happihour");

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    
    $name = $obj['name'];
    $contact = $obj['contact'];

    $result = mysqli_query($conn,"INSERT INTO contact(name, contact) VALUES ($name, $contact)");
  }


  if($result->num_rows!==0){
      echo json_encode('ok');
  }
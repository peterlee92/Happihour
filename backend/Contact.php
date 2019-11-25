<?php

$conn = mysqli_connect("localhost","root","","Happihour");

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$user_id = $obj['user_id'];

$contact = mysqli_query($conn,"SELECT contact FROM contacts WHERE user_id = ''");


function get($contact) {
    $sql = "
    SELECT albums.name as album_name, release_date, total_tracks, image_url, spotify_url, artists.name as artist_name 
    FROM albums
    JOIN artists ON artists.id = artist_id
    WHERE albums.name like '%$name%' 
    ORDER BY release_date
    ";
  
    $albums = runQuery($sql);
  
    return $albums;
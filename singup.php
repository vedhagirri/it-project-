<?php
include "db.php";
$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
echo ($conn->query($sql)) ? "Signup successful!" : "Signup failed: " . $conn->error;
?>
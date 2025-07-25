<?php
include "db.php";
$email = $_POST['email'];
$password = $_POST['password'];
$sql = "SELECT * FROM farmers WHERE email='$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    echo (password_verify($password, $user['password'])) ? "Farmer Login successful!" : "Invalid password.";
} else {
    echo "Farmer not found.";
}
?>

<!-- PHP: db.php -->
<?php
$conn = new mysqli("localhost", "root", "", "agrikart");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

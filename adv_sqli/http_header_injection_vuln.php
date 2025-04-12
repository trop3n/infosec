<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$insert_sql = "INSERT INTO logs (user_Agent) VALUES ('$userAgent)";
if ($conn->query($insert_sql) === TRUE) {
    echo "<p class='text-green-500'>New logs inserted successfully</p>";
} else {
    echo "<p class='text-red-500'>Error: " . $conn->error . " (Error Code: " . $conn->errno . ")</p>";
}

$sql = "SELECT * FROM logs WHERE user_Agent = '$userAgent'";
..
...
?>
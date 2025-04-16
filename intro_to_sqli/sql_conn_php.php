<?php
$conn = new mysqli("localhost", "root", "password", "users");
$query = "select * from logins";
$result = $conn->query($query);

while($row = $result->fetch_assoc() ){
    echo $row["name"]."<br>";
}
?>
<?php
$searchInput = $_POST['findUser'];
$query = "select * from logins where username like '%searchInput'";
$result = $conn->query($query);
?>
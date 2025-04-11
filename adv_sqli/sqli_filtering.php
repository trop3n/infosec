<?php
$special_characters = array(" ", "AND", "and", "or", "OR", "UNION", "SELECT");
$username = str_replace($special_characters, '', $username);
$sql = "SELECT * FROM user WHERE username = '$username'";
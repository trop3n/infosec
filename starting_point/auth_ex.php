<?php
mysql_connect("localhost", "db_username", "db_password"); # connection to the SQL database
mysql_select_db("users"); # database table where user info is stored

$username=$_POST['username']; # user-specified username
$password=$_POST['password']; # user-specified password

$sql="SELECT * FROM users WHERE username='$username' AND password='$password'";  # query for user/pass retrieval from DB.

$result=mysql_query($sql);    # performs query stored in $sql and stores it in $result

$count=mysql_num_rows($result); # sets the $count variable to the number of rows stored in $result

if ($count==1){
    # checks if there's at least 1 result, and if yes:
    $_SESSION['username'] = $username; # creates a session with the specified $username
    $_SESSION['password'] = $password; # creates a session with the specified $password
    header("location:home.php"); # redirect to homepage
}
else { # if there's no singular result of a user/pass combination: 
    header("location:login.php");
    # no redirection, as the login failed in the case the $ count variable is not equal to 1, HTTP response code 200 OK.
}

?>
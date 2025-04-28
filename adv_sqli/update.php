<?php
if ( isset($_POST['update'])) {
    $unique_id = $_POST['update'];
    $ssn = $_POST['ssn_' . $unique_id];
    $new_book_name = $_POST['new_book_name_' . $unique_id];
    $new_author = $_POST['new_author_' . $unique_id];

    $update_sql = "UPDATE books SET book_name = '$new_book_name', author = '$new_author' WHERE ssn = '$ssn'; INSERT INTO logs (page) VALUES ('update.php');";
..
...
?>
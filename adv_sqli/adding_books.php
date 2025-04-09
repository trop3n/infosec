<?php
if (isset($_POST['submit'])) {
    $ssn = $conn->real_escape_string($_POST['ssn']);
    $book_name = $conn->real_escape_string($_POST['book_name']);
    $author = $conn->real_escape_string($_POST['author']);
    $sql = "INSERT INTO books (ssn, book_name, author) VALUES ('$ssn', '$book_name', '$author')";
    if ($conn->query($sql) === TRUE) {
        echo "<p class='text-green-500'>New book added successfully</p>";
    } else {
        echo "<p class='text-red-500'>Error: " . conn->error . "</p>";
    }
}
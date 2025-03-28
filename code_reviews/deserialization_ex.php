<?php
$serializedNote = file_get_contents('note.txt'); // reading the serialized note from the file
$noteArray = unserialize($serializedNote); // converting the serialized string back into a PHP array
echo "Title: " . $noteArray['title'] . "<br>";
echo "Content: " . $noteArray['content'];
?>
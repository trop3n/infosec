<?php
$noteArray = array("title" => "My THM Note", "content" => "Welcome to THM!");
$serializedNote = serialize($noteArray); // converting the note into a storable format
file_put_contents('note.txt', $serializedNote); // saving the serialized note to a file
?>
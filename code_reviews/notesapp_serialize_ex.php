<?php

class Notes {
    public $Notescontent;

    public function __construct($content) {
        $this->Notescontent = $content;
    }
}

$note = new Notes("Welcome to THM");
$serialized_note = serialize($note);
?>
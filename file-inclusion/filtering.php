<?php

$file = $_GET['file'];
$file = str_replace('../', '', $file);

include('files/' . $file);

<?php
function containsStr($str, $subStr){
    return strpos($str, $subStr) !== false;
}

if(isset($_GET['page'])){
    if (!containsStr($_GET['page'], '../..') &&  containsStr($_GET['page'], '/var/www/html')){
        include $_GET['page'];
    }else{
        echo 'You are now allowed to go outside /var/www/html/ directory!';
    }
}

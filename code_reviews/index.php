# vulnerable to insecure serialization

<?php
class UserData {
    private $data;
    public function __construct($data) {
        $this->data = $data;
    }
..
require 'test.php';
if(isset($_GET['encode'])) {
    $userData = new UserData($_GET['encode']);
    $serializedData = serialize($userData);
    $base64EncodedData = base64_encode($serializedData);
    echo "Normal Data: " . $_GET['encode'] . "<br>";
    echo "Serialized Data: " . $serializedData . "<br>";
    echo "Base64 Encoded Data: " . $base64EncodedData;
} elseif(isset($_GET['decode'])) {
    $base64EncodedData = $_GET['decode'];
    $serializedData = base64_decode($base64EncodedData);
    $test = unserialize($serializedData);
    echo "Base 64 Encoded Serialized Data: " . $base64EncodedData . "<br>";
    echo "Serialized Data: " . $serializedData;

...
}
}
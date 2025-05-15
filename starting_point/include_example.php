<?php

# File 1 --> vars.php
$color = 'green';
$fruit = 'apple';

?>

################################################################################

# File 2 --> test.php
<?php

echo "A $color $fruit"; // output = "A"

include 'vars.php';

echo "A $color $fruit"; // output = "A green apple"

?>
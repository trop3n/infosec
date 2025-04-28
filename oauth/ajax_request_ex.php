      
<button class="btn btn-primary" onclick="submitStatus()">Submit</button>
<h2 class="mt-4">Submitted Status</h2>
<ul class="list-group" id="status-list">
    <?php
    session_start();
    if (isset($_POST['status'])) {
        $status = $_POST['status'];
        if (!isset($_SESSION['statuses'])) {
            $_SESSION['statuses'] = [];
        }
        $_SESSION['statuses'][] = $status;
        header('Content-Type: application/json');
        echo json_encode(['status' => $status]);
        exit();
    }
    // Display previously stored statuses
    if (isset($_SESSION['statuses'])) {
        foreach ($_SESSION['statuses'] as $status) {
            echo '<li class="list-group-item">' . $status . '</li>';
        }
    }
    ?>
</ul>
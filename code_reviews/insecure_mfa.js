// function that verifies the submitted 2FA token

function verify_2fa_code($code) {
    if (!isSecureContext($_SESSION['token']))
    return false;

    return $code === $_SESSION['token'];
}

// function called in the /mfa page
if (verify_2fa_code($_POST['code'])) { // if successful, the user will be redirected to the dashboard.
    $_SESSION['authenticated'] = true; // session that is used to check if the user completed the 2FA
    header('Location: ' . ROOT_DIR . '/dashboard');
    return;
}

// Considering the above implementation is secure, some instances of 
// dangling issuance of the $_SESSION['authenticated'] after the first step of 
// authentication will bypass the above code, as shown below.
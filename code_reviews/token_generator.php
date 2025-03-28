function generateToken()
{
    $token = strval(rand(1250,1350));

    $_SESSION['token'] = $token;
    return 'success';
}
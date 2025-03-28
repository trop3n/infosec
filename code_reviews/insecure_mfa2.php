function authenticate($email, $password){
  $pdo = get_db_connection();
  $stmt = $pdo->prepare("SELECT `password` FROM users WHERE email = :email");
  $stmt->execute(['email' => $email]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  return $user && password_verify($password, $user['password']);
}

if (authenticate($email, $password)) {
    $_SESSION['authenticated'] = true; # this flag should only be issued after the MFA completion
    $_SESSION['email'] = $_POST['email'];
    header('Location: ' . ROOT_DIR . '/mfa');
    return;
}
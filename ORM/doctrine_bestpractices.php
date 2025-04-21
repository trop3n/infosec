<?php
$query = $entityManager->createQuery('SELECT u FROM user u WHERE u.username = :username');
$query->setParameter('username', $username);
$users = $query->getResult();
?>
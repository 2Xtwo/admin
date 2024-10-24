<?php
session_start();
header('Content-Type: application/json');

// In a real application, use a secure database and password hashing
$valid_username = 'admin';
$valid_password = 'admin123';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === $valid_username && $password === $valid_password) {
    $_SESSION['admin_logged_in'] = true;
    echo json_encode(['success' => true]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid username or password'
    ]);
}
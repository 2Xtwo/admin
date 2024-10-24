<?php
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit;
}

// Include your database connection script
require_once 'config.php'; // Adjust this path as needed

// Initialize the variable to avoid undefined variable notice
$admin = null;

// Fetch admin data from the database
$username = $_SESSION['username'];
$query = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $admin = $result->fetch_assoc();
} else {
    echo "No such user found.";
    exit; // Or handle this more gracefully
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #333;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        form {
            background-color: #444;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
        }

        h1 {
            color: #FC766A;
            text-align: center;
            margin-bottom: 20px;
        }

        label {
            color: #FC766A;
            display: block;
            margin: 10px 0 5px;
        }

        input[type="text"], input[type="email"], input[type="file"] {
            margin-bottom: 10px;
            border: 1px solid #555;
            background-color: #333;
            color: #fff;
            padding: 8px;
            width: calc(100% - 18px);
            border-radius: 4px;
        }

        button {
            background-color: #5B84B1;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
            width: 100%;
            margin-top: 20px;
        }

        button:hover {
            background-color: #FC766A;
        }

        .footer-links {
            text-align: center;
            margin-top: 20px;
        }

        .footer-links a {
            color: #FC766A;
            text-decoration: none;
            padding: 10px;
            display: inline-block;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        img {
            display: block;
            margin: 10px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <?php if ($admin): ?>
    <form action="update_profile.php" method="POST" enctype="multipart/form-data">
        <h1 style="color: #FC766A;">Admin Profile</h1>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($admin['username']); ?>" readonly><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($admin['email']); ?>" required><br>

        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($admin['name']); ?>" required><br>

        <label for="profile_picture">Profile Picture:</label>
        <input type="file" id="profile_picture" name="profile_picture">
        <img src="<?php echo htmlspecialchars($admin['profile_picture']); ?>" alt="Profile Picture" style="width:100px;"><br><br>

        <button type="submit" name="update_profile">Update Profile</button>
    </form>
    <?php else: ?>
    <p>User profile not found.</p>
    <?php endif; ?>

    <p><a href="admin_dashboard.php">Back to Dashboard</a></p>
    <p><a href="logout.php">Logout</a></p>
</body>
</html>

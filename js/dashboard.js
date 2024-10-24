document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('logout.php');
        if (response.ok) {
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Logout failed:', error);
    }
});
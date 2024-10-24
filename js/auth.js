// Handle user login
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const credentials = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/membership.html';
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    alert('Login failed. Please try again.');
  }
});

// Handle user registration
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      window.location.href = '/checkout.html';
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (error) {
    alert('Registration failed. Please try again.');
  }
});

// Handle logout
function logout() {
  fetch('/api/logout', { method: 'POST' })
    .then(() => {
      localStorage.removeItem('user');
      window.location.href = '/login.html';
    })
    .catch(error => {
      console.error('Logout failed:', error);
    });
}

// Check authentication status
function checkAuth() {
  const user = localStorage.getItem('user');
  if (!user && !window.location.pathname.includes('login.html') && !window.location.pathname.includes('register.html')) {
    window.location.href = '/login.html';
  }
}

// Run auth check on page load
document.addEventListener('DOMContentLoaded', checkAuth);
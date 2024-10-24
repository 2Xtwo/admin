document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded");
});

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            return;
            e.preventDefault();
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Registration successful');
            } else {
                alert('Error: ' + result.error);
            }
        });
    }
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Login successful');
            } else {
                alert('Error: ' + result.error);
            }
        });
    }

    const appraisalForm = document.getElementById('appraisalForm');
    if (appraisalForm) {
        appraisalForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(appraisalForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/appraisal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Appraisal submitted successfully');
            } else {
                alert('Error: ' + result.error);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            return;
            e.preventDefault();
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Registration successful');
                    window.location.href = '/login.html';
                } else {
                    alert('Error: ' + result.error);
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Login successful');
                    window.location.href = '/appraisal.html';
                } else {
                    alert('Error: ' + result.error);
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        });
    }

    const appraisalForm = document.getElementById('appraisalForm');
    if (appraisalForm) {
        appraisalForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(appraisalForm);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('/appraisal', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Appraisal submitted successfully');
                } else {
                    alert('Error: ' + result.error);
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration, let's assume we have a predefined username and password
    const predefinedUsername = 'teacher';
    const predefinedPassword = 'password123';

    if (username === predefinedUsername && password === predefinedPassword) {
        // Store a flag in local storage to indicate the user is logged in
        localStorage.setItem('loggedIn', 'true');
        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

// Check if the user is logged in when accessing the dashboard
if (window.location.pathname.endsWith('dashboard.html')) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
        // If not logged in, redirect to the login page
        window.location.href = 'login.html';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Get all nav links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Remove active class from all nav items
            navLinks.forEach(nav => nav.parentElement.classList.remove("active"));

            // Add active class to the clicked nav item
            this.parentElement.classList.add("active");

            // Navigate to the href of the clicked link
            window.location.href = this.getAttribute("href");
        });
    });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (for demonstration purposes)
    if (email === "test@example.com" && password === "password") {
        const userDetails = {
            schoolName: "Example School",
            representative: "John Doe",
            country: "Country",
            city: "City",
            address: "123 Main St",
            phone: "123-456-7890",
            email: email,
            webpage: "http://example.com",
            staffNumber: 50,
            package: "Premium"
        };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        window.location.href = 'dashboard.html';
    } else {
        alert("Invalid login credentials!");
    }
});
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting normally
    
    // Prepare form data
    const formData = new FormData(this);
    
    // Send the form data via Fetch API
    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();  // Parse the response as JSON
    })
    .then(data => {
        if (data.success) {
            alert(data.message);  // Show success message
            // Optionally redirect to the dashboard after success
            // window.location.href = 'dashboard.html';
        } else {
            alert(data.error);  // Show error message from PHP
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});


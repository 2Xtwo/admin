<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
<style>
  
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #333;
    color: #fff;
}


.sidebar {
    width: 250px;
    background-color: #5B84B1;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    padding-top: 20px;
    color: white;
}
.sidebar h2{
    color: #FC766A;
    font-weight: bolder;
    text-indent: 15px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar ul li {
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
}
.sidebar ul li:hover{
    text-transform: capitalize;
}

.sidebar ul li a {
    color: #ccc;
    text-decoration: none;
}

.sidebar ul li a:hover {
color: #FC766A;
}


.main-content {
    margin-left: 250px;
    padding: 20px;
    background-color: #333;
    min-height: 100vh;
}


.dashboard-header {
    background-color: #333;
    padding: 15px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-actions {
    display: flex;
    align-items: center;
}

.user-img {
    width: 100px;
    height: auto;
    border-radius: 50%;
    margin-right: 10px;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #5B84B1;
    color: #333;
    min-width: 150px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    padding: 10px;
    text-decoration: none;
    display: block;
    color: #333;
}

.dropdown-content a:hover {
    background-color: #FC766A;
}

.dropdown:hover .dropdown-content {
    display: block;
}


.dashboard-section {
    margin-bottom: 40px;
}

.stats-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.card {
    background-color: #5B84B1;
    padding: 20px;
    color: white;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.card h3 {
    margin-bottom: 15px;
    font-size: 18px;
}

.card p {
    font-size: 24px;
}

.card-detail {
    font-size: 12px;
    color: #ddd;
    margin-top: 10px;
}

.activity-feed {
    background-color: #5B84B1;
    padding: 20px;
    border-radius: 8px;
}

.activity-entry {
    padding: 10px 0;
    border-bottom: 1px solid #FC766A;
}

.table-container {
    margin-top: 20px;
}

.table-search {
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #FC766A;
    border-radius: 4px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table th, table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #FC766A;
}

table th {
    background-color: #5B84B1;
    color: white;
}

.btn-approve, .btn-edit, .btn-delete {
    padding: 8px 12px;
    color: white;
    border: none;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;
}

.btn-approve {
    background-color: #4CAF50;
}

.btn-edit {
    background-color: #007BFF;
}

.btn-delete {
    background-color: #f44336;
}


.report-summary {
    background-color: #444;
    color: white;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.settings-tabs {
    display: flex;
    margin-bottom: 20px;
}

.tab-link {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    cursor: pointer;
    border: none;
    margin-right: 10px;
    border-radius: 4px;
}

.tab-link.active {
    background-color: #FC766A;
}

.tab-content {
    display: none;
    padding: 20px;
    background-color: #5B84B1;
    border-radius: 8px;
}

.tab-content.active {
    display: block;
}

form label {
    display: block;
    margin-bottom: 10px;
}

form input, form select {
    width: 98%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #FC766A;
    border-radius: 4px;
}

form button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

/* Logs & Activity */

</style>
</head>
<body>
    <!-- Sidebar -->
    <div class="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
            <li><a href="#dashboard-overview">🏠 Dashboard Overview</a></li>
            <li><a href="#user-management">👥 User Management</a></li>
            <li><a href="#financial-reports">📊 Financial Reports</a></li>
            <li><a href="#system-settings">⚙️ System Settings</a></li>
            <li><a href="#logs-activity">📜 Logs & Activity</a></li>
        </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <header class="dashboard-header">
            <div class="header-actions">
                <span class="header-icon">🔔</span>
                <div class="user-profile">
                    <img src="assets/images/sigve.jpeg" alt="User" class="user-img">
                    <div class="dropdown">
                        <button class="dropbtn">Admin▼</button>
                        <div class="dropdown-content">
                            <a href="admin_profile.php" >Profile</a>
                            <a href="">Settings</a>
                            <a href="#" onclick="logout()">Logout</a>
</div>

                    </div>
                </div>
            </div>
        </header>
<hr><hr>

        <section id="dashboard-overview" class="dashboard-section">
            <h2>Dashboard Overview</h2>
            <div class="stats-cards">
        <div class="card">
        <h3 >Appraisals</h3>
                    <span class="card-detail"><a href="dashboard.html"><p>Visit Appraisals Dashboard</p></</span>
                </div></a>
                <div class="card">
                    <h3>Total Registered Users</h3>
                    <p>1,234</p>
                    <span class="card-detail">+34 new users this week</span>
                </div>
                <div class="card">
                    <h3>Pending Approvals</h3>
                    <p>12</p>
                    <span class="card-detail">5 pending requests today</span>
                </div>
                <div class="card">
                    <h3>Monthly Revenue</h3>
                    <p>$23,456</p>
                    <span class="card-detail">+10% growth this month</span>
                </div>
                <div class="card">
                    <h3>Active Sessions</h3>
                    <p>34</p>
                    <span class="card-detail">Current active users</span>
                </div>
            </div>
            <div class="activity-feed">
                <h3>Recent Activity</h3>
                <div class="activity-entry">
                    <p><strong>John Doe</strong> registered on 10/05/2024</p>
                </div>
                <div class="activity-entry">
                    <p><strong>Jane Smith</strong> made a payment of $100 on 09/05/2024</p>
                </div>
                <div class="activity-entry">
                    <p><strong>Admin</strong> updated system settings on 08/05/2024</p>
                </div>
            </div>
        </section>

        <section id="user-management" class="dashboard-section">
            <h2>User Management</h2>
            <div class="table-container">
                <input type="search" placeholder="Search Users" class="table-search">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td>Admin</td>
                            <td>Pending</td>
                            <td>
                                <button class="btn-approve">Approve</button>
                                <button class="btn-edit">Edit</button>
                                <button class="btn-delete">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>janesmith@example.com</td>
                            <td>User</td>
                            <td>Active</td>
                            <td>
                                <button class="btn-edit">Edit</button>
                                <button class="btn-delete">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section id="financial-reports" class="dashboard-section">
            <h2>Financial Reports</h2>
            <div class="report-summary">
                <p>Current Month Revenue: <strong>$23,456</strong></p>
                <p>Total Transactions: <strong>123</strong></p>
                <p>Refund Requests: <strong>2</strong></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#1234</td>
                        <td>Jane Smith</td>
                        <td>$100</td>
                        <td>10/05/2024</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>#1235</td>
                        <td>John Doe</td>
                        <td>$50</td>
                        <td>09/05/2024</td>
                        <td>Refunded</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- System Settings Section -->
        <section id="system-settings" class="dashboard-section">
            <h2>System Settings</h2>
            <div class="settings-tabs">
                <button class="tab-link active" onclick="openSettings(event, 'site-config')">Site Configuration</button>
                <button class="tab-link" onclick="openSettings(event, 'notification-settings')">Notification Settings</button>
                <button class="tab-link" onclick="openSettings(event, 'security-settings')">Security Settings</button>
            </div>


            <div id="site-config" class="tab-content active">
                <h3>Site Configuration</h3>
                <form>
                    <label for="site-name">Website Name:</label>
                    <input type="text" id="site-name" name="site-name" value="Your Website">
                    <label for="logo-upload">Upload Logo:</label>
                    <input type="file" id="logo-upload" name="logo-upload">
                    <label for="contact-email">Contact Email:</label>
                    <input type="email" id="contact-email" name="contact-email" value="contact@example.com">
                    <button type="submit">Save Settings</button>
                </form>
            </div>

            <div id="notification-settings" class="tab-content">
                <h3>Notification Settings</h3>
                <form>
                    <label for="email-notifications">Enable Email Notifications:</label>
                    <input type="checkbox" id="email-notifications" name="email-notifications" checked>
                    <label for="sms-alerts">Enable SMS Alerts:</label>
                    <input type="checkbox" id="sms-alerts" name="sms-alerts">
                    <label for="sms-schedule">SMS Schedule:</label>
                    <select id="sms-schedule" name="sms-schedule">
                        <option value="immediately">Immediately</option>
                        <option value="daily">Daily Summary</option>
                        <option value="weekly">Weekly Summary</option>
                    </select>
                    <button type="submit">Save Settings</button>
                </form>
            </div>

            <!-- Security Settings Tab -->
            <div id="security-settings" class="tab-content">
                <h3>Security Settings</h3>
                <form>
                    <label for="2fa">Require Two-Factor Authentication (2FA):</label>
                    <input type="checkbox" id="2fa" name="2fa">
                    <label for="password-strength">Password Strength Requirement:</label>
                    <select id="password-strength" name="password-strength">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <label for="session-timeout">Session Timeout (minutes):</label>
                    <input type="number" id="session-timeout" name="session-timeout" value="30">
                    <button type="submit">Save Settings</button>
                </form>
            </div>
        </section>

        <!-- Logs & Activity Section -->
        <section id="logs-activity" class="dashboard-section">
            <h2>Logs & Activity</h2>
            <p>System logs, admin actions, and recent events.</p>
            <div class="activity-feed">
                <div class="activity-entry">
                    <p><strong>Admin</strong> logged in from IP: 192.168.1.1 on 10/05/2024</p>
                </div>
                <div class="activity-entry">
                    <p><strong>Admin</strong> updated user permissions on 09/05/2024</p>
                </div>
                <div class="activity-entry">
                    <p><strong>Admin</strong> initiated system backup on 08/05/2024</p>
                </div>
            </div>
        </section>
    </div>

    <script src="script.js"></script>
    <script>
          function approve(id){
        $.ajax({
            url: "admin.php",
            type: "POST",
            processData: true,
            contentType: "application/x-www-form-urlencoded",
            dataType:'json',
            data:{id},
            success: function(datas){
                let newId = `#row-${id}`;
                console.log(newId);
                $(newId).remove();
            }
        })

    } 

    function drop() {
        let disp = $(".admin-profile-drop").css("display");
        if(disp==="none"){
            $(".admin-profile-drop").css("display", "block");
        } else{
            $(".admin-profile-drop").css("display", "none");
        }
    }

    function logout() {
        window.location.href="admin_login.php";
    }

    $(document).ready(function(){
        $.ajax({
            url: "admin.php",
            type: "GET",
            processData: true,
            contentType: "application/x-www-form-urlencoded",
            dataType:'json',
            success: function(datas){
                console.log(datas);
                $("#user_table").empty();
                datas.forEach(data => {
                    var newRow = $(`<tr id = 'row-${data.id}' ></tr>`);
                    var td =  $("<td></td>").text(data.username);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.email);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.country);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.city);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.address);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.phone);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.representative);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.webpage);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.staffNumber);
                    newRow.append(td);
                    td =  $("<td></td>").text(data.package);
                    newRow.append(td);
                    
                    // if(data.isApproved){
                        td =  $(`<td><button onclick="approve(${data.id})" class="approve-but">Approve</button></td>`);
                    // } else{
                    //     td =  $(`<td><button onclick="approve(${data.id})" class="approve-but">UnApprove</button></td>`);
                    // }
                    newRow.append(td);
                    $("#user_table").append(newRow);
                });
            },
            error: function(err){
                console.log(err);
                // Handle error response
            }
        })
    })
    </script>
    <script>
        // Smooth scroll to section
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Tabs for settings section
function openSettings(evt, settingName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(settingName).style.display = "block";
    evt.currentTarget.className += " active";
}

    </script>
</body>
</html>

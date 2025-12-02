// Show Login Box
function showLogin() {
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

// Show Register Box
function showRegister() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
}

// Register Function
function register() {
    let user = document.getElementById("reg-user").value;
    let pass = document.getElementById("reg-pass").value;

    if (user === "" || pass === "") {
        document.getElementById("reg-msg").innerText = "Fields cannot be empty!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[user]) {
        document.getElementById("reg-msg").innerText = "Username already exists!";
        return;
    }

    users[user] = pass;
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("reg-msg").innerText = "Registration Successful!";
}

// Login Function
function login() {
    let user = document.getElementById("log-user").value;
    let pass = document.getElementById("log-pass").value;

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[user] && users[user] === pass) {
        localStorage.setItem("loggedUser", user);
        openSecurePage(user);
    } else {
        document.getElementById("log-msg").innerText = "Invalid username or password!";
    }
}

// Open Secure Page
function openSecurePage(user) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "none";
    document.getElementById("secure-page").style.display = "block";

    document.getElementById("welcome").innerText = "Welcome, " + user;
}

// Logout
function logout() {
    localStorage.removeItem("loggedUser");
    location.reload();
}

// Auto Login if already logged in
let logged = localStorage.getItem("loggedUser");
if (logged) openSecurePage(logged);

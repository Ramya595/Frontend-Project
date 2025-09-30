// Switch between forms
function showLogin() {
  document.getElementById("signup-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}

function showSignup() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("signup-box").classList.remove("hidden");
}

// Handle Signup
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    skills: document.getElementById("skills").value,
    location: document.getElementById("location").value,
    password: document.getElementById("password").value,
  };

  console.log("Signup Data:", data);

  // Send to backend (example: /api/signup)
  fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(result => {
    alert("Signup successful!");
    console.log(result);
  })
  .catch(err => console.error("Error:", err));
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value,
  };

  console.log("Login Data:", data);

  // Send to backend (example: /api/login)
  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(result => {
    alert("Login successful!");
    console.log(result);
  })
  .catch(err => console.error("Error:", err));
});

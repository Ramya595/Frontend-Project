# Frontend-Project

# Login & Signup Frontend

This project provides a simple **Login and Signup UI** built with **HTML, CSS, and JavaScript**.
It allows users to enter details such as **Name, Email, Skills, Location, and Password** (for signup) and sends the data to backend APIs for storage and authentication.

---

## 🚀 Features

* Signup form with:

  * Name
  * Email
  * Skills
  * Location
  * Password
* Login form with:

  * Email
  * Password
* Switch easily between **Login** and **Signup** forms.
* Data is collected and sent to backend APIs using JavaScript `fetch()`.

---

## 🛠️ Technologies Used

* **HTML5** → structure of the forms
* **CSS3** → styling and layout
* **JavaScript** → form handling and API requests

---

## 📂 Project Structure

```
login-signup-project/
│── index.html     # Main entry page
│── style.css      # Styling for the forms
│── script.js      # JavaScript logic (form handling & API calls)
```

---

## ▶️ How to Run

1. Clone or download this project.
2. Open the folder in **VS Code** (or any editor).
3. Run `index.html` directly in your browser

   * OR install the **Live Server** extension in VS Code and click "Go Live".

---

## 🔗 Backend Integration

* The frontend sends API requests using `fetch()`.
* By default, the code uses:

  * `POST http://localhost:5000/api/signup` → for signup
  * `POST http://localhost:5000/api/login` → for login
* Replace these URLs in `script.js` with the actual backend endpoints provided by your backend team.

---

## 📌 Notes

* This project only covers the **frontend part**.
* No database or backend setup is included here (handled by another team).
* Make sure CORS is enabled on the backend so that frontend requests work properly.


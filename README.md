# 📝 Blog Website

A full-stack blog website built using **React** (client) and **Node.js** (API). This project allows users to read, write, edit, and delete blog posts with a seamless frontend and RESTful API backend.

> GitHub Repo: [kumarroshan12/blog-website](https://github.com/kumarroshan12/blog-website)

---

## 📁 Project Structure

blog-website/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ └── ...
│
├── api/ # Node.js backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── ...
│
├── README.md
└── ...

yaml
Copy
Edit

---

## 🚀 Features

### 🔹 Client (React)
- Responsive and modern blog UI
- View all blog posts
- Read individual blog post
- Create, edit, and delete posts (if authorized)
- Form validation and error handling

### 🔹 API (Node.js)
- RESTful API built using Express.js
- CRUD operations for blog posts
- MongoDB (or any DB) integration via Mongoose (or ORM)
- User authentication and authorization (JWT-based)
- Secure and scalable structure

---

## 🛠 Tech Stack

| Layer   | Technology           |
|---------|----------------------|
| Frontend | React, HTML, CSS, Axios |
| Backend  | Node.js, Express.js |
| Database | MongoDB (via Mongoose) |
| Auth     | JWT (JSON Web Token) |
| Version Control | Git + GitHub |

---

## ⚙️ Getting Started


### 📌 Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)
- Git

### 🧪 Clone the repository

```bash
git clone https://github.com/kumarroshan12/blog-website.git
cd blog-website

Running the Project
🚩 Start Backend (API)

cd api
npm install
npm run dev

 Start Frontend (Client)

cd client
npm install
npm start

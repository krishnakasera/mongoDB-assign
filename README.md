#  MongoDB CRUD API (Node.js + Express + Mongoose)

##  Introduction

This project is a simple CRUD (Create, Read, Update, Delete) API built using:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

It allows users to manage user data (name, email, age).

---

##  Objective

* Connect Node.js with MongoDB Atlas
* Create schema using Mongoose
* Perform CRUD operations
* Apply validation (required fields, unique email)

---

##  Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman (for testing)

---

##  Project Structure

mongodb-crud/
│── models/
│   └── User.js
│── routes/
│   └── userRoutes.js
│── server.js
│── package.json
│── README.md

---

##  Installation & Setup


### 1. Install dependencies

npm install

### 2. Run the server

node server.js

---

##  API Endpoints

###  Create User

POST /api/users

Body:
{
"name": "Krishna",
"email": "[krishna@gmail.com](mailto:krishna@gmail.com)",
"age": 22
}

---

###  Get All Users

GET /api/users

---

### Get Single User

GET /api/users/:id

---

###  Update User

PUT /api/users/:id

Body:
{
"name": "Updated Name",
"age": 25
}

---

###  Delete User

DELETE /api/users/:id

---

##  Features

* Create new user
* Fetch all users
* Fetch single user
* Update user data
* Delete user
* Validation using Mongoose

---

##  Expected Output

A working REST API that performs CRUD operations on a MongoDB collection.

---

##  Author

Krishna

---

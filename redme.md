# Task Management Application

This is a task management application built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The application allows users to perform CRUD operations on tasks, including creating, editing, deleting, and viewing tasks.

## Table of Contents

- [Task Management Application](#task-management-application)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Requirements](#requirements)
    - [Backend (Node.js and Express.js)](#backend-nodejs-and-expressjs)
    - [Database (MongoDB)](#database-mongodb)
    - [Frontend (ReactJs)](#frontend-reactjs)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Video Demo](#video-demo)

## Overview

The task management application is designed to provide a seamless experience for users to manage their tasks. It consists of a backend developed with Node.js and Express.js, a MongoDB database for storing task details, and a frontend built using ReactJs.

## Requirements

### Backend (Node.js and Express.js)

- Create RESTful API endpoints for CRUD operations on tasks.
- Implement user authentication using JWT tokens for authorization.
- Ensure proper validation and error handling in API endpoints.
- Implement middleware for logging API requests and responses.

### Database (MongoDB)

- Design a MongoDB schema for tasks.
- Store task details, including title, description, due date, and status.
- Implement proper indexing for efficient querying.

### Frontend (ReactJs)

- Create a single-page application (SPA) using ReactJs.
- Implement views for listing tasks, creating a new task, editing existing tasks, and viewing task details.
- Use ReactJs services to communicate with the backend API.
- Implement user authentication on the frontend.


## Installation

To install and run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/task-management-app.git`
2. Navigate to the project directory: `cd task-management-app`
3. Install dependencies for both the backend and frontend: `npm install`
4. Set up the MongoDB database and update the connection details in the backend configuration.
5. Start the backend server: `npm run start:server`
6. Start the frontend development server: `npm run start:client`
7. Open your browser and visit `http://localhost:3000` to access the application.

## Usage

- Navigate to the homepage to view the list of tasks.
- Use the navigation menu to create a new task, edit existing tasks, or view task details.
- Ensure to log in for authentication features.

## Video Demo

[Link to Video Demo](#)


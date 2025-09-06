## Project Management Platform
A collaborative project management application built with Next.js, allowing teams to create projects, manage tasks, and assign members.

Features
Create & Manage Projects: Easily create new projects to organize your work.

Task Management : Add, update, and delete tasks within each project.

Member Assignment : Assign team members to specific tasks to track responsibilities.

Real-time Updates : Changes are reflected instantly for all collaborators.

Authentication: Secure user authentication to protect your project data.

Getting Started
These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (LTS version)

npm or yarn

Installation
Clone the repository:

git clone [your-repository-url]
cd [your-project-name]

Install the dependencies:

npm install
# or
yarn install

Set up environment variables:
Create a .env.local file in the root directory and add your environment variables. This is a common practice for storing sensitive information like database credentials.

# Example .env.local content (replace with your actual values)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
# Database connection string
DATABASE_URL=your_database_connection_string

Run the development server:

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser to see the application.

Technologies Used
Next.js - The React framework for production.
React - The JavaScript library for building user interfaces.
Tailwind CSS - A utility-first CSS framework for rapid UI development.

Database - SQL
[Your Authentication Provider] - Specify the authentication service you used (e.g., NextAuth.js, Clerk).

Backend Repository
https://github.com/jeswinJohnson/OdooHackathonBackend

This repository contains a RESTful API for build monday project built for the ODOO NMIT Hackathon. The backend is built with FastAPI and SQLModel, providing a robust and efficient foundation for managing users, projects, and tasks.

🚀 Features User Authentication: Secure user registration and login with hashed passwords.

Project Management: Create, view, update, and delete projects.

Task Handling: Create, manage, and track tasks with assignees and deadlines.

Member Management: Add and remove members from projects with different roles.

Database: Uses a local SQLite database for development, with a schema designed for a relational database like PostgreSQL.

API Documentation: Automatic interactive API documentation (Swagger UI) for all endpoints.

🛠 Tech Stack Framework: FastAPI

ORM: SQLModel

Web Server: Uvicorn

Database: SQLite

Authentication: Passlib for password hashing

📦 Getting Started Prerequisites You need Python 3.8+ installed on your system.

Creators
Jayashree Agarwal
Jeswin Johnson
Siddhi Dorepalli

Deployment
This project can be deployed to any hosting service that supports Next.js, such as Vercel, Netlify, or AWS.

For detailed deployment instructions, refer to the Next.js documentation.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

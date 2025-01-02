# Portfolio Tracker Application

## Project Overview
The Portfolio Tracker Application is a full-stack web application that enables users to manage and track their stock holdings. It features a React.js frontend for an intuitive user interface and a Spring Boot backend for seamless API and database interactions. The application provides CRUD functionality for stocks and displays portfolio details in a responsive and user-friendly dashboard.

## Features
- **Add, Edit, and Delete Stocks:**  
  Manage stock holdings with fields like stock name, ticker symbol, quantity, and buy price.
  
- **View Portfolio:**  
  Display stocks in a dynamic table format.
  
- **Responsive Dashboard:**  
  Ensures accessibility on both desktop and mobile devices.
  
- **Backend API:**  
  RESTful APIs built with Spring Boot for efficient communication between frontend and backend.
  
- **Database Management:**  
  Uses MySQL to store and manage stock details persistently.

## Technology Stack
### Frontend
- **Framework:** React.js
- **Styling:** CSS
- **HTTP Client:** Axios

### Backend
- **Framework:** Spring Boot
- **ORM:** JPA and Hibernate
- **Database:** MySQL

## Installation and Setup

### Prerequisites
- Install Node.js.
- Install Java JDK 17 or higher.
- Install MySQL Server.
- Install Visual Studio Code.

### Steps to Run Locally

#### Set Up the Backend
1. Open the backend folder in VS Code.
2. Update database credentials in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>

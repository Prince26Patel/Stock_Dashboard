Portfolio Tracker
A comprehensive portfolio tracker that allows users to monitor and manage their investments seamlessly.

Features
Real-time portfolio tracking for stocks, assets, and other investments.
Backend powered by Java Spring Boot.
Frontend built with modern JavaScript (React or similar framework).
MySQL database for reliable and efficient data storage.

Tech Stack
Frontend: JavaScript (React)
Backend: Java Spring Boot
Database: MySQL

Prerequisites:
Make sure you have the following installed on your system:
Node.js (for running the frontend)
Java JDK (for running Spring Boot)
MySQL (for database)

1. Clone the Repository
git clone https://github.com/Prince26Patel/Stock_Dashboard.git

2. Set Up the Database
Create a MySQL database:
CREATE DATABASE portfolio_tracker;
Update the application.properties or application.yml file in the Spring Boot backend with your MySQL database credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update



Frontend:
Navigate to the frontend directory:
Install dependencies:
npm install
Start the development server:
npm start


Backend:
Navigate to the backend directory:
Run the Spring Boot application:
./mvnw spring-boot:run

Accessing the Application:
Frontend: Open your browser and navigate to http://localhost:3000.
Backend API: Accessible at http://localhost:8080.


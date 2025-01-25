# **Portfolio Tracker**

A **comprehensive portfolio tracker** that allows users to seamlessly monitor and manage their investments.

---

## **Features**

- **Real-time portfolio tracking** for stocks, assets, and other investments.
- Backend powered by **Java Spring Boot**.
- Frontend built with **modern JavaScript (React)**.
- Reliable and efficient **MySQL database** for data storage.

---

## **Core Functionalities**

### **1. Add Stock**
- Fetches the ticker's `close` value from **Alphavantage API**.
- Adds the stock to the user's portfolio list.

### **2. Edit Stock**
- Calculates:
  - Weighted average quantity.
  - Total invested amount.
  - Total current value of the stock.

### **3. Delete Stock**
- Deletes a stock from the portfolio based on its ticker name.

---

## **Tech Stack**

- **Frontend**: JavaScript (React)
- **Backend**: Java Spring Boot
- **Database**: MySQL

---

## **Prerequisites**

Ensure the following tools are installed on your system:

- **Node.js** (for running the frontend)
- **Java JDK** (for running Spring Boot)

---

## **Getting Started**

### **1. Clone the Repositories**

#### Frontend:
```bash
git clone https://github.com/Prince26Patel/Stock_Dashboard.git
```

#### Backend:
```bash
git clone https://github.com/Prince26Patel/Stock_Dashboard_backend.git
```

---

### **Frontend Setup**

- **Deployed Version**: [Portfolio Tracker Frontend](https://stock-dashboard-xi.vercel.app)

To run locally:

1. Navigate to the frontend directory:
   ```bash
   cd portfolio-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the application in your browser at:
   ```
   http://localhost:3000
   ```

---

### **Backend Setup**

- **Deployed Version**: Hosted on **Railway**.

To run locally:

1. Navigate to the backend directory:
   ```bash
   cd stock-tracker
   ```

2. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

3. Access the API at:
   ```
   http://localhost:8080
   ```

---

## **Test Credentials**

Use the following test accounts to explore the application:

### **Account 1**
- **Username**: Prince
- **Email**: ui22ec55@iiitsurat.ac.in
- **Password**: 123456

### **Account 2**
- **Username**: Akash
- **Email**: nagendrapatel1975@gmail.com
- **Password**: 12345678

---

## **Demo Video**

Watch the demo video showcasing the features and functionalities of the Portfolio Tracker:  
[Demo Video Link](https://drive.google.com/file/d/1kVN7McEvEat8SkEnZEHkE58WgO_tUFc-/view?usp=sharing)

---

## **Contributions**

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.

---

**Happy Tracking! 🚀**

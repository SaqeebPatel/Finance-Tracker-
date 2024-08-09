# Finance Tracker API

This project is a REST API for managing personal finances, including user registration, authentication, and transaction management. It is built using Node.js, Express, and MongoDB. The API allows you to create, read, update, and delete users and transactions, and also provides report generation features.

## Tech Stack
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)
- Multer

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/) (v4.x or later)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/SaqeebPatel/Finance-Tracker-
    cd finance-tracker-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.prqkren.mongodb.net/finance-tracker
    ```

4. Start the server:

    ```sh
    npm start
    ```

## API Endpoints

### User Endpoints

- **Register User**
    - **URL:** POST /api/users/register
    - **Request Body:**
        ```json
        {
          "username": "Saqeeb Patel",
          "email": "saqeeb@example.com",
          "password": "securepassword"
        }
        ```

- **Login User**
    - **URL:** POST /api/users/login
    - **Request Body:**
        ```json
        {
          "email": "saqeeb@example.com",
          "password": "securepassword"
        }
        ```

- **Get All Users**
    - **URL:** GET /api/users

- **Get User by ID**
    - **URL:** GET /api/users/:id

- **Update User**
    - **URL:** PUT /api/users/:id
    - **Request Body:**
        ```json
        {
          "username": "Updated Username"
        }
        ```

- **Delete User**
    - **URL:** DELETE /api/users/:id

### Transaction Endpoints

- **Add Transaction**
    - **URL:** POST /api/transactions
    - **Request Body:**
        ```json
        {
          "userId": "user_id",
          "amount": 100,
          "type": "expense",
          "category": "Food",
          "date": "2024-08-09",
          "description": "Grocery shopping"
        }
        ```

- **Get All Transactions**
    - **URL:** GET /api/transactions

- **Get Transaction by ID**
    - **URL:** GET /api/transactions/:id

- **Update Transaction**
    - **URL:** PUT /api/transactions/:id
    - **Request Body:**
        ```json
        {
          "amount": 150
        }
        ```

- **Delete Transaction**
    - **URL:** DELETE /api/transactions/:id

### Report Endpoints

- **Generate Report**
    - **URL:** GET /api/reports
    - **Request Query Parameters:**
        - `startDate` (optional): Start date for the report
        - `endDate` (optional): End date for the report

## Error Handling

The API returns appropriate HTTP status codes and error messages for various error scenarios, such as validation errors, resource not found, and internal server errors.

## License

This project is licensed under the MIT License.

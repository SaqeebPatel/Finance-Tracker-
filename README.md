﻿# Finance-Tracker-
# Finance Tracker
- Finance Tracker is a robust API built with Node.js, Express, and MongoDB, designed for personal finance management. It includes user authentication with JWT and supports file uploads with Multer for attaching receipts to transactions.

## Tech Stack
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)
- Multer
## Features
- User Authentication: Secure user registration and login functionalities using JWT.
- ransaction Management: CRUD operations for managing financial transactions.
- File Uploads: Multer integration for attaching files (receipts) to transactions.
- Reports API: Generate reports based on transaction amounts within a specific time frame.
## Installation
# Clone the repository:
bash```
  git clone https://github.com/yourusername/finance-tracker.git
```
Navigate to the project directory:
bash
Copy code
cd finance-tracker
Install dependencies:
bash
Copy code
npm install
Configuration
Create a .env file in the root directory and add the following environment variables:
plaintext
Copy code
PORT=your_port
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Usage
Start the server:
bash
Copy code
npm start
The server will run on the port specified in the .env file.
API Endpoints
User Authentication
Register a new user:

http
Copy code
POST /api/register
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "password": "examplePass"
}
Login an existing user:

http
Copy code
POST /api/login
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "password": "examplePass"
}
Transactions
Add a new transaction:

http
Copy code
POST /api/transactions
Request Body:
json
Copy code
{
  "amount": 100,
  "type": "income",
  "category": "salary",
  "description": "Monthly Salary",
  "date": "2024-07-01"
}
Update an existing transaction:

http
Copy code
PUT /api/transactions/:id
Request Body:
json
Copy code
{
  "amount": 150,
  "type": "income",
  "category": "freelance",
  "description": "Freelance Project",
  "date": "2024-07-05"
}
Delete a transaction:

http
Copy code
DELETE /api/transactions/:id
Reports
Get transactions by date range:
http
Copy code
GET /api/reports/transactions?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD
Replace start_date and end_date with the desired date range.
File Uploads
Upload a file (receipt):
http
Copy code
POST /api/upload
Request Body (FormData):
plaintext
Copy code
FormData {
  file: <file>,
  transactionId: "transaction_id"
}
Contributing
Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them:
bash
Copy code
git commit -m 'Add some feature'
Push to the branch:
bash
Copy code
git push origin feature-name
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to the open-source community for providing the tools and libraries that made this project possible.

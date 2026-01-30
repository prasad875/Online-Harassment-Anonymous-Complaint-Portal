📌 Online Harassment Anonymous Complaint Portal

An industry-style web application designed to help users report online harassment anonymously, upload evidence, and track complaint status using a unique complaint ID.
Admins can view complaints, update status, and maintain status history.

🚀 Features
👤 User Features

Submit complaints anonymously

Upload evidence files (images/documents)

Receive a unique Complaint ID

Track complaint status using the Complaint ID

🧑‍💼 Admin Features

View all submitted complaints

Update complaint status (e.g., Submitted, Under Investigation, Resolved)

Maintain complete status history for each complaint

🏗️ Project Architecture

This project follows an industry-level layered architecture:

Routes → Controllers → Services → Models → Database


Benefits:

Clean separation of concerns

Easy maintenance

Scalable backend design

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MySQL

File Upload: Multer

API Style: RESTful APIs

Version Control: Git & GitHub

📂 Project Structure
backend/
│
├── src/
│   ├── config/        # Database & multer configuration
│   ├── controllers/  # Request handling
│   ├── services/     # Business logic
│   ├── models/       # Database queries
│   ├── routes/       # API routes
│   ├── middlewares/  # Error & upload handling
│   ├── utils/        # Helpers & ID generator
│   ├── app.js
│   └── server.js
│
├── database/          # SQL schema
├── uploads/           # Uploaded files
├── .env
└── package.json

⚙️ Setup & Installation (For Developers)
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/Online-Harassment-Anonymous-Complaint-Portal.git
cd Online-Harassment-Anonymous-Complaint-Portal/backend

2️⃣ Install dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in backend/:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=harassment_db

4️⃣ Create Database

Run the SQL file inside database/schema.sql using MySQL Workbench or phpMyAdmin.

5️⃣ Start the Server
node src/server.js


Server runs at:

http://localhost:3000

🧪 API Testing (Using Postman)
🔹 Submit Complaint
POST /api/complaints


Body (form-data):

description (text)

category (text)

isAnonymous (true/false)

files (file)

🔹 Track Complaint
GET /api/complaints/search/:complaintId

🔹 Admin – View Complaints
GET /api/admin/complaints

🔹 Admin – Update Status
PUT /api/admin/complaints/:complaintId/status

{
  "status": "under investigation"
}

👥 How Clients Can Use This Project
For Organizations / Institutions:

Deploy this system to allow safe and anonymous harassment reporting

Use it in colleges, workplaces, or online communities

Track and manage complaints securely

Improve transparency and accountability

For End Users:

Submit a complaint anonymously

Upload proof if available

Save the generated Complaint ID

Track complaint progress anytime

🔐 Security & Privacy

No personal user identity is stored

Anonymous reporting supported

Status updates logged for audit purposes

🎯 Future Enhancements

Admin authentication (JWT)

Email/SMS notifications

Role-based access control

Frontend-backend deployment

Advanced filtering & analytics

🧑‍💻 Team Contribution

Backend development using Node.js & MySQL

REST API design

Database schema design

GitHub collaboration & version control

📜 License

This project is developed for academic and demonstration purposes.

🙌 Acknowledgements

Thanks to team members for collaboration and support during development.
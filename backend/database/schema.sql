CREATE DATABASE harassment_db;
USE harassment_db;

CREATE TABLE complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id VARCHAR(50) UNIQUE,
  description TEXT,
  category VARCHAR(100),
  is_anonymous BOOLEAN,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id VARCHAR(50),
  filename VARCHAR(255),
  filepath VARCHAR(255),
  filetype VARCHAR(50),
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE status_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id VARCHAR(50),
  status VARCHAR(50),
  note TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

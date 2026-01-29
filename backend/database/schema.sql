-- =========================================
-- Online Harassment & Anonymous Complaint Portal
-- Database Schema (Member-1)
-- =========================================

CREATE DATABASE IF NOT EXISTS harassment_portal;
USE harassment_portal;

-- Complaints Table
CREATE TABLE complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id VARCHAR(50) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  incident_date DATE,
  location VARCHAR(255),
  status ENUM('Pending', 'In Review', 'Resolved') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Complaint Files Table
CREATE TABLE complaint_files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id VARCHAR(50) NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_complaint_files
    FOREIGN KEY (complaint_id)
    REFERENCES complaints(complaint_id)
    ON DELETE CASCADE
);

-- Admin Users Table
CREATE TABLE admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

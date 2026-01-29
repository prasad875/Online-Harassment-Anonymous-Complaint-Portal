USE harassment_portal;

-- Sample Complaint
INSERT INTO complaints (
    complaint_id,
    category,
    description,
    incident_date,
    location,
    status
) VALUES (
    'CMP-1001',
    'Cyber Bullying',
    'Anonymous abusive messages received via social media',
    '2025-01-15',
    'Online',
    'Pending'
);

-- Sample Complaint File
INSERT INTO complaint_files (
    complaint_id,
    file_path
) VALUES (
    'CMP-1001',
    'uploads/evidence1.png'
);

-- Sample Admin User
INSERT INTO admin_users (
    username,
    password,
    role
) VALUES (
    'admin',
    'hashed_password_here',
    'admin'
);

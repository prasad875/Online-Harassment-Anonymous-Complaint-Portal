const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.login = async (email, password) => {
  const [rows] = await db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email]
  );

  if (!rows.length) throw new Error("Invalid email or password");

  const admin = rows[0];
  if (admin.password !== password) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: admin.id, role: "admin" },
    "SECRET_KEY",
    { expiresIn: "1d" }
  );

  return { token };
};

exports.getAllComplaints = async () => {
  const [rows] = await db.query(`
    SELECT c.*, f.file_path
    FROM complaints c
    LEFT JOIN files f ON c.id = f.complaint_id
    ORDER BY c.created_at DESC
  `);

  return rows;
};

exports.updateComplaintStatus = async (complaintId, status) => {
  const [result] = await db.query(
    "UPDATE complaints SET status = ? WHERE complaint_id = ?",
    [status, complaintId]
  );

  if (!result.affectedRows) {
    throw new Error("Complaint not found");
  }
};

import pool from "../config/db.js";

export const createComplaint = async (data) => {
  await pool.query(
    "INSERT INTO complaints (complaint_id, description, category, is_anonymous, status) VALUES (?,?,?,?,?)",
    [data.complaintId, data.description, data.category, data.isAnonymous, "submitted"]
  );
};

export const findByComplaintId = async (complaintId) => {
  const [rows] = await pool.query(
    "SELECT * FROM complaints WHERE complaint_id=?",
    [complaintId]
  );
  return rows[0];
};

export const getAllComplaints = async () => {
  const [rows] = await pool.query("SELECT * FROM complaints");
  return rows;
};

export const updateStatus = async (complaintId, status) => {
  await pool.query(
    "UPDATE complaints SET status=? WHERE complaint_id=?",
    [status, complaintId]
  );
};

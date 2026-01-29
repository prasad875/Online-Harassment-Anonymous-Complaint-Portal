import pool from "../config/db.js";

export const addHistory = async (complaintId, status, note) => {
  await pool.query(
    "INSERT INTO status_history (complaint_id, status, note) VALUES (?,?,?)",
    [complaintId, status, note]
  );
};

export const getHistory = async (complaintId) => {
  const [rows] = await pool.query(
    "SELECT * FROM status_history WHERE complaint_id=?",
    [complaintId]
  );
  return rows;
};

import pool from "../config/db.js";

export const saveFile = async (file, complaintId) => {
  await pool.query(
    "INSERT INTO files (complaint_id, filename, filepath, filetype) VALUES (?,?,?,?)",
    [complaintId, file.originalname, file.path, file.mimetype]
  );
};

export const getFiles = async (complaintId) => {
  const [rows] = await pool.query(
    "SELECT * FROM files WHERE complaint_id=?",
    [complaintId]
  );
  return rows;
};

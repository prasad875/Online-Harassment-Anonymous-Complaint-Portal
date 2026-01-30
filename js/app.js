// frontend/js/api.js
import { API_BASE_URL } from "./config.js";

export async function postComplaint(data) {
  const res = await fetch(`${API_BASE_URL}/complaints`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Failed to submit complaint");
  }

  return res.json();
}

export async function getComplaintById(id) {
  const res = await fetch(`${API_BASE_URL}/complaints/${id}`);

  if (!res.ok) {
    throw new Error("Complaint not found");
  }

  return res.json();
}

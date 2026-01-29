import * as Complaint from "../models/complaint.model.js";
import * as History from "../models/status.history.model.js";

export const getAllComplaints = async () => {
  return await Complaint.getAllComplaints();
};

export const updateComplaintStatus = async (complaintId, status) => {
  await Complaint.updateStatus(complaintId, status);
  await History.addHistory(complaintId, status, "Updated by admin");
};

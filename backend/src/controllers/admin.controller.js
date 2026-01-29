import * as service from "../services/admin.service.js";

export const getAllComplaints = async (req, res) => {
  const data = await service.getAllComplaints();
  res.json({ success: true, data });
};

export const updateStatus = async (req, res) => {
  await service.updateComplaintStatus(
    req.params.complaintId,
    req.body.status
  );
  res.json({ success: true });
};

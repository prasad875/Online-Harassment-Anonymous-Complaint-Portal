import * as service from "../services/complaint.service.js";
import { success, failure } from "../utils/response.helper.js";

export const submitComplaint = async (req, res) => {
  try {
    const complaintId = await service.submitComplaint(req.body, req.files);
    success(res, { complaintId }, "Complaint submitted");
  } catch (err) {
    failure(res, err.message);
  }
};

export const trackComplaint = async (req, res) => {
  try {
    const data = await service.trackComplaint(req.params.complaintId);
    success(res, data);
  } catch (err) {
    failure(res, err.message);
  }
};

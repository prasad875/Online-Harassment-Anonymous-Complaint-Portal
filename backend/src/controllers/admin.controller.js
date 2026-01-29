const adminService = require("../services/admin.service");
const { successResponse, errorResponse } = require("../utils/response.helper");

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await adminService.login(email, password);
    return successResponse(res, "Login successful", result);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await adminService.getAllComplaints();
    return successResponse(res, "Complaints fetched", complaints);
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

exports.updateComplaintStatus = async (req, res) => {
  try {
    const { complaintId } = req.params;
    const { status } = req.body;

    await adminService.updateComplaintStatus(complaintId, status);
    return successResponse(res, "Status updated successfully");
  } catch (err) {
    return errorResponse(res, err.message);
  }
};

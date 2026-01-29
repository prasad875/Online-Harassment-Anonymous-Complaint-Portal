const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const adminAuth = require("../middlewares/admin.auth");

router.post("/login", adminController.adminLogin);
router.get("/complaints", adminAuth, adminController.getAllComplaints);
router.put(
  "/complaints/:complaintId/status",
  adminAuth,
  adminController.updateComplaintStatus
);

module.exports = router;

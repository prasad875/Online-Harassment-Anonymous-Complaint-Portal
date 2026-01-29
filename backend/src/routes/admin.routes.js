import express from "express";
import { getAllComplaints, updateStatus } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/complaints", getAllComplaints);
router.put("/complaints/:complaintId/status", updateStatus);

export default router;

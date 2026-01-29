import express from "express";
import { upload } from "../middlewares/upload.middle.js";
import { submitComplaint, trackComplaint } from "../controllers/complaint.controller.js";

const router = express.Router();

router.post("/", upload.array("files"), submitComplaint);
router.get("/search/:complaintId", trackComplaint);

export default router;

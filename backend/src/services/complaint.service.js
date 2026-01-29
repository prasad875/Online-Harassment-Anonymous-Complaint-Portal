import { generateComplaintId } from "../utils/complaintIdGenerator.js";
import * as Complaint from "../models/complaint.model.js";
import * as File from "../models/file.model.js";
import * as History from "../models/status.history.model.js";

export const submitComplaint = async (data, files) => {
  const complaintId = generateComplaintId();

  // ✅ CONVERT isAnonymous TO INTEGER (0 / 1)
  const isAnonymous =
    data.isAnonymous === true ||
    data.isAnonymous === "true" ||
    data.isAnonymous === 1 ||
    data.isAnonymous === "1"
      ? 1
      : 0;

  // ✅ SAVE COMPLAINT
  await Complaint.createComplaint({
    complaintId,
    description: data.description,
    category: data.category,
    isAnonymous
  });

  // ✅ SAVE STATUS HISTORY
  await History.addHistory(
    complaintId,
    "submitted",
    "Complaint submitted"
  );

  // ✅ SAVE FILES (IF ANY)
  if (files && files.length > 0) {
    for (const file of files) {
      await File.saveFile(file, complaintId);
    }
  }

  return complaintId;
};

export const trackComplaint = async (complaintId) => {
  const complaint = await Complaint.findByComplaintId(complaintId);
  const files = await File.getFiles(complaintId);
  const history = await History.getHistory(complaintId);

  return { complaint, files, history };
};

export const success = (res, data, message = "Success") => {
  res.json({ success: true, message, data });
};

export const failure = (res, message) => {
  res.status(500).json({ success: false, message });
};

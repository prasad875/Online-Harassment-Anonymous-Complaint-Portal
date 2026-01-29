export const generateComplaintId = () => {
  return "CMP-" + new Date().getFullYear() + "-" +
    Math.floor(1000 + Math.random() * 9000);
};

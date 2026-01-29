const upload = require("../config/multer.config");

// Single file upload middleware (field name: "file")
module.exports = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      err.statusCode = 400;
      return next(err);
    }
    next();
  });
};

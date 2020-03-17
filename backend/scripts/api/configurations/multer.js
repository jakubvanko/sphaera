const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // First argument is error
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + ".jpg");
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype !== "image/jpeg") {
        const error = new Error("File type forbidden");
        error.status = 403;
        return cb(error, false);
    }
    // TODO: validate token 401 error
    const token = req.body.token;
    return cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: process.env.MAX_FILE_SIZE
    }
});

module.exports = upload;

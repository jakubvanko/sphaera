const router = require("express").Router();
const upload = require("../configurations/multer");

// POST an upload
// Uses multi-part form data
router.post("/", upload.single("file"), (req, res, next) => {
    return res.status(201).json({name: req.file.filename})
});

module.exports = router;

const router = require("express").Router();
const upload = require("../configurations/multer");
const auth = require("../middleware/auth");

// POST an upload
// Uses multi-part form data
router.post("/", auth.authorized(true), upload.single("file"), (req, res) => {
    return res.status(201).json({name: req.file.filename})
});

module.exports = router;

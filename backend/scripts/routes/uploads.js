const router = require("express").Router();
const upload = require("../middleware/multer");
const auth = require("../middleware/auth");

/*
    Route to post a file upload (image in jpeg)
    Uses multi-part form data
 */
router.post("/", auth.authorized(true), upload.single("file"), (req, res) => {
    return res.status(201).json({name: req.file.filename})
});

module.exports = router;

const router = require("express").Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/user");

// Register a new user
router.post("/", async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const result = await userController.createUser(firstName, lastName, email, password);
    return res.status(201).json(result);
});

router.post("/login", async (req, res) => {
    const token = await userController.loginUser(req.body.email, req.body.password);
    return res.status(200).json({token});
});

router.post("/resetpassword", async (req, res) => {
    await userController.resetPassword(req.body.email);
    return res.status(204).json()
});

router.patch("/password", async (req, res) => {
    await userController.updatePassword(req.auth.user._id, req.body.password);
    return res.status(204).json();
});

// Get user if admin
router.get("/:userId", auth.authorized(true), async (req, res) => {
    const user = await userController.getUser(req.params.userId);
    return res.status(200).json(user);
});

// Get logged in user
router.get("/current", auth.authorized(), async (req, res) => {
    const user = await userController.getUser(req.auth.user._id);
    return res.status(200).json(user);
});

// Delete user if admin
router.delete("/:userId", auth.authorized(true), async (req, res) => {
    await userController.deleteUser(req.params.userId);
    return res.status(204).json();
});

// Delete logged in user
router.delete("/current", auth.authorized(), async (req, res) => {
    await userController.deleteUser(req.auth.user._id);
    return res.status(204).json();
});

module.exports = router;

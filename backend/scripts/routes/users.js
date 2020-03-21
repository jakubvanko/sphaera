const router = require("express").Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/user");

// Register a new user
router.post("/", async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const result = await userController.createUser(firstName, lastName, email, password);
    return res.status(201).json(result);
});

// User login
router.post("/login", async (req, res) => {
    const token = await userController.loginUser(req.body.email, req.body.password);
    return res.status(200).json({token});
});

// Reset user password
router.post("/resetpassword", async (req, res) => {
    await userController.resetPassword(req.body.email);
    return res.status(204).json()
});

/*
    Routes for the logged in user:
 */
router.get("/current", auth.authorized(), async (req, res) => {
    const user = await userController.getUser(req.auth.user._id);
    return res.status(200).json(user);
});

router.patch("/current", auth.authorized(), async (req, res) => {
    await userController.updateUser(req.auth.user._id, req.body);
    return res.status(204).json();
});

router.delete("/current", auth.authorized(), async (req, res) => {
    await userController.deleteUser(req.auth.user._id);
    return res.status(204).json();
});

/*
    User routes for admins:
 */
router.get("/:userId", auth.authorized(true), async (req, res) => {
    const user = await userController.getUser(req.params.userId);
    return res.status(200).json(user);
});

router.patch("/:userId", auth.authorized(true), async (req, res) => {
    await userController.updateUser(req.params.userId, req.body);
    return res.status(204).json();
});

router.delete("/:userId", auth.authorized(true), async (req, res) => {
    await userController.deleteUser(req.params.userId);
    return res.status(204).json();
});

module.exports = router;

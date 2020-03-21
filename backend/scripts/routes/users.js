const router = require("express").Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/user");

/*
    Route to register a new user
 */
router.post("/", async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const user = await userController.createUser(firstName, lastName, email, password);
    return res.status(201).json(user);
});

/*
    Routes for user authentication
 */
router.post("/login", async (req, res) => {
    const token = await userController.loginUser(req.body.email, req.body.password);
    return res.status(200).json({token});
});

router.post("/resetpassword", async (req, res) => {
    await userController.resetPassword(req.body.email);
    return res.status(204).json()
});

/*
    Routes to get, modify, or delete the logged in user
 */
router.get("/current", auth.authorized(), async (req, res) => {
    const user = await userController.getUser(req.auth.user._id);
    return res.status(200).json(user);
});

router.patch("/current", auth.authorized(), async (req, res) => {
    const user = await userController.updateUser(req.auth.user._id, req.body);
    return res.status(200).json(user);
});

router.delete("/current", auth.authorized(), async (req, res) => {
    const user = await userController.deleteUser(req.auth.user._id);
    return res.status(200).json(user);
});

/*
    Routes for admins to get, modify, or delete a user by id
 */
router.get("/:userId", auth.authorized(true), async (req, res) => {
    const user = await userController.getUser(req.params.userId);
    return res.status(200).json(user);
});

router.patch("/:userId", auth.authorized(true), async (req, res) => {
    const user = await userController.updateUser(req.params.userId, req.body);
    return res.status(200).json(user);
});

router.delete("/:userId", auth.authorized(true), async (req, res) => {
    const user = await userController.deleteUser(req.params.userId);
    return res.status(200).json(user);
});

module.exports = router;

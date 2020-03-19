const router = require("express").Router();
const mongoose = require("mongoose");
const crypto = require("crypto");
const util = require("util");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const sendMail = require("../configurations/nodemailer");

const User = require("../models/user");

const generateHash = util.promisify(crypto.pbkdf2);
const generateToken = util.promisify(jwt.sign);

// Register a new user
router.post("/", async (req, res) => {
    const foundUsers = await User.find({email: req.body.email})
        .exec();
    if (foundUsers.length > 0) {
        const error = new Error("Already registered");
        error.status = 409;
        throw error;
    }
    if (req.body.password.length < 6) {
        throw new Error("Password too short");
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = await generateHash(req.body.password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash.toString("hex"),
        salt
    });
    const result = await user.save();
    return res.status(201).json({
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
    });
});

// TODO: Users can delete their own accounts
router.delete("/:userId", auth(true), async (req, res) => {
    const userId = req.params.userId;
    await User.deleteOne({_id: userId})
        .exec();
    return res.status(204).json();
});

router.post("/login", async (req, res) => {
    const foundUser = await User.findOne({email: req.body.email}, "_id password salt admin")
        .exec();
    if (foundUser !== null) {
        const hashToCheck = await generateHash(req.body.password,
            foundUser.salt + process.env.HASH_PEPPER,
            parseInt(process.env.HASH_ITERATIONS),
            parseInt(process.env.HASH_LENGTH),
            process.env.HASH_ALGORITHM);
        if (hashToCheck.toString("hex") === foundUser.password) {
            const token = await generateToken({
                _id: foundUser._id,
                email: req.body.email,
                admin: foundUser.admin
            }, process.env.LOGIN_TOKEN_SECRET, {
                expiresIn: process.env.LOGIN_TOKEN_EXPIRATION
            });
            return res.status(200).json({
                token
            })
        }
    }
    const error = new Error("Auth failed");
    error.status = 401;
    throw error;
});

router.post("/resetpassword", async (req, res) => {
    const email = req.body.email;
    const foundUser = await User.findOne({email: req.body.email})
        .exec();
    if (foundUser !== null) {
        const token = await generateToken({
            _id: foundUser._id
        }, process.env.RESET_TOKEN_SECRET, {
            expiresIn: process.env.RESET_TOKEN_EXPIRATION
        });
        const result = await sendMail(email, "Password Change Request", `<p>${token}</p>`);
        if (result.messageId === undefined) {
            const error = new Error("Mail error");
            error.status = 500;
            throw error;
        }
    }
    return res.status(204).json()
});

router.patch("/password", auth(false, process.env.RESET_TOKEN_SECRET), async (req, res) => {
    const userId = req.tokenData._id;
    if (req.body.password.length < 6) {
        throw new Error("Password too short");
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = await generateHash(req.body.password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM);
    await User.updateOne({_id: userId}, {
        $set: {
            password: hash.toString("hex"),
            salt
        }
    })
        .exec();
    return res.status(204).json();
});

// Get a user data if logged in
router.get("/current", auth(), async (req, res) => {
    const user = await User.findById(tokenData._id)
        .select("_id firstName lastName email admin funds tickets")
        .exec();
    if (user !== null) {
        return res.status(200).json(user);
    }
    return res.status(404).json({})
});

module.exports = router;

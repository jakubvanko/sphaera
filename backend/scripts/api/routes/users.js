const router = require("express").Router();
const mongoose = require("mongoose");
const crypto = require("crypto");
const util = require('util');

const User = require("../models/user");

const generatePassword = util.promisify(crypto.pbkdf2);

router.post("/", async (req, res, next) => {
    const foundUsers = await User.find({email: req.body.email})
        .exec();
    if (foundUsers.length > 0) {
        const error = new Error("Already registered");
        error.status = 409;
        throw error;
    }
    const salt = crypto.randomBytes(16).toString('hex');
    const password = await generatePassword(req.body.password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: password.toString('hex'),
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

module.exports = router;

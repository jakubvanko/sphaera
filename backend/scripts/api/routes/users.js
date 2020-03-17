const router = require("express").Router();
const mongoose = require("mongoose");
const crypto = require("crypto");

const User = require("../models/user");

router.post("/register", (req, res, next) => {
    const salt = crypto.randomBytes(16).toString('base64');
    crypto.pbkdf2(req.body.password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM,
        (error, password) => {
            if (error) next(error);
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                salt,
                password
            });
            user.save()
                .then(result => res.status(201).json({
                    _id: result._id,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    email: result.email,
                }))
                .catch(error => {
                    next(error)
                });
        });
});

module.exports = router;

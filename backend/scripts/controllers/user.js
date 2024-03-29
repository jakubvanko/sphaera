const mongoose = require("mongoose");
const util = require("util");
const jwt = require("jsonwebtoken");

const sendMail = require("../configurations/nodemailer");
const generateHash = require("../configurations/crypto");
const User = require("../models/user");
// Ticket should be imported because it is used in populate
const Ticket = require("../models/ticket");
const passwordReset = require("../emails/passwordReset");

const generateToken = util.promisify(jwt.sign);

const validatePassword = (password) => {
    if (password.length < 6) {
        const error = new Error("Password too short");
        error.status = 400;
        throw error;
    }
    return true;
};

exports.createUser = async (firstName, lastName, email, password) => {
    const foundUsers = await User.find({email})
        .exec();
    if (foundUsers.length > 0) {
        const error = new Error("Already registered");
        error.status = 409;
        throw error;
    }
    validatePassword(password);
    const {hash, salt} = await generateHash(password);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        password: hash,
        salt,
        firstName,
        lastName,
        email
    });
    await user.save();
    return {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    }
};

exports.getUser = async (id) => {
    const user = await User.findById(id)
        .select("_id firstName lastName email admin funds tickets")
        .populate("tickets", "_id event area price bought")
        .exec();
    if (user === null) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
    }
    return user;
};

exports.deleteUser = (id) => {
    return User.findByIdAndDelete(id)
        .select("_id firstName lastName email admin funds tickets")
        .populate("tickets", "_id event area price bought")
        .exec();
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({email})
        .select("_id password salt")
        .exec();
    if (user !== null && user !== undefined) {
        const {hash} = await generateHash(password, user.salt);
        if (hash === user.password) {
            return generateToken({_id: user._id}, process.env.TOKEN_SECRET, {
                expiresIn: process.env.LOGIN_TOKEN_EXPIRATION || "1d"
            });
        }
    }
    const error = new Error("Auth failed");
    error.status = 401;
    throw error;
};

exports.resetPassword = async (email) => {
    const user = await User.findOne({email})
        .select("_id firstName")
        .exec();
    if (user !== null && user !== undefined) {
        const token = await generateToken({_id: user._id}, process.env.TOKEN_SECRET, {
            expiresIn: process.env.RESET_TOKEN_EXPIRATION || "1d"
        });
        const link = `https://sphaera.jakubvanko.com/reset-password/${token}`;
        await sendMail({
            to: email,
            subject: "Password Change Request",
            html: passwordReset(user.firstName, link)
        });
    }
};

exports.updateUser = async (id, properties) => {
    const updatedProperties = {};
    for (const value of ["firstName", "lastName", "email"]) {
        if (properties[value] !== null && properties[value] !== undefined) {
            updatedProperties[value] = properties[value]
        }
    }
    if (properties.password !== null && properties.password !== undefined) {
        validatePassword(properties.password);
        const {hash, salt} = await generateHash(properties.password);
        updatedProperties.password = hash;
        updatedProperties.salt = salt;
    }
    return await User.findByIdAndUpdate(id, {
        $set: updatedProperties
    }, {
        new: true
    })
        .select("_id firstName lastName email admin funds tickets")
        .populate("tickets", "_id event area price bought")
        .exec();
};

const mongoose = require("mongoose");
const crypto = require("crypto");
const util = require("util");

const sendMail = require("../configurations/nodemailer");
const User = require("../models/user");

const generateHash = util.promisify(crypto.pbkdf2);
const generateToken = util.promisify(jwt.sign);

exports.createUser = async (firstName, lastName, email, password) => {
    const foundUsers = await User.find({email})
        .exec();
    if (foundUsers.length > 0) {
        const error = new Error("Already registered");
        error.status = 409;
        throw error;
    }
    if (password.length < 6) {
        const error = new Error("Password too short");
        error.status = 400;
        throw error;
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = await generateHash(password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        password: hash.toString("hex"),
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
    return User.deleteOne({_id: id})
        .exec();
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({email})
        .select("_id password salt")
        .exec();
    if (user !== null && user !== undefined) {
        const validationHash = await generateHash(password,
            user.salt + process.env.HASH_PEPPER,
            parseInt(process.env.HASH_ITERATIONS),
            parseInt(process.env.HASH_LENGTH),
            process.env.HASH_ALGORITHM);
        if (validationHash.toString("hex") === user.password) {
            return generateToken({_id: user._id}, process.env.TOKEN_SECRET, {
                expiresIn: process.env.LOGIN_TOKEN_EXPIRATION
            });
        }
    }
    const error = new Error("Auth failed");
    error.status = 401;
    throw error;
};

exports.resetPassword = async (email) => {
    const user = await User.findOne({email})
        .select("_id")
        .exec();
    if (user !== null && user !== undefined) {
        const token = await generateToken({_id: user._id}, process.env.TOKEN_SECRET, {
            expiresIn: process.env.RESET_TOKEN_EXPIRATION
        });
        const mailResult = await sendMail(email, "Password Change Request", `<p>${token}</p>`);
        if (mailResult.messageId === undefined) {
            const error = new Error("Mail error");
            error.status = 500;
            throw error;
        }
    }
};

exports.updatePassword = async (id, password) => {
    if (password.length < 6) {
        const error = new Error("Password too short");
        error.status = 400;
        throw error;
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = await generateHash(password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM);
    await User.updateOne({_id: id}, {
        $set: {
            password: hash.toString("hex"),
            salt
        }
    })
        .exec();
};

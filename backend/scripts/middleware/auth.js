const jwt = require("jsonwebtoken");
const util = require("util");

const verifyToken = util.promisify(jwt.verify);
const User = require("../models/user");

exports.loadAuthData = options => async (req, res, next) => {
    req.auth = {
        verified: false,
        admin: false,
        user: null
    };
    if (req.headers.authorization === undefined) return next();
    const tokens = req.headers.authorization.split(",");
    for (const tokenDef of tokens) {
        const tokenParts = tokenDef.split(" ");
        tokenParts[0] = tokenParts[0].toLowerCase();
        if (tokenParts[0] === "bearer") {
            if (options.tokenSecret === undefined) continue;
            try {
                const result = await verifyToken(tokenParts[1], options.tokenSecret);
                const user = await User.findById(result._id)
                    .exec();
                if (user === null || user === undefined) { // noinspection ExceptionCaughtLocallyJS
                    throw new Error();
                }
                req.auth.verified = true;
                req.auth.user = user;
                req.auth.admin = user.admin;
            } catch (e) {
                req.auth.verified = false;
            }
        }
    }
    return next();
};

exports.authorized = (admin = false) => (req, res, next) => {
    if (req.auth.verified === true) {
        if (admin === false || req.auth.admin === true) {
            return next();
        }
    }
    const error = new Error("Auth failed");
    error.status = 401;
    throw error;
};

const jwt = require("jsonwebtoken");
const util = require("util");

const verifyToken = util.promisify(jwt.verify);

module.exports = (admin = false, secret = process.env.LOGIN_TOKEN_SECRET) =>
    async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const result = verifyToken(token, secret);
            if (admin === false || result.admin === true) {
                req.tokenData = result;
                return next()
            }
            // noinspection ExceptionCaughtLocallyJS
            throw new Error();
        } catch (e) {
            const error = new Error("Auth failed");
            error.status = 401;
            throw error;
        }
    };

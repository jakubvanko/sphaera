const crypto = require("crypto");
const util = require("util");

const createHash = util.promisify(crypto.pbkdf2);

const hashAndSalt = async (password, salt) => {
    const usedSalt = salt === undefined ? crypto.randomBytes(16).toString("hex") : salt;
    const hash = (await createHash(password,
        usedSalt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS) || 128,
        parseInt(process.env.HASH_LENGTH) || 128,
        process.env.HASH_ALGORITHM || "sha512")).toString("hex");
    return {hash, salt: usedSalt};
};

module.exports = hashAndSalt;

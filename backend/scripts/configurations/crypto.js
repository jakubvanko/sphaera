const crypto = require("crypto");
const util = require("util");

const createHash = util.promisify(crypto.pbkdf2);

const hashAndSalt = async (password, salt) => {
    const usedSalt = salt === undefined ? crypto.randomBytes(16).toString("hex") : salt;
    const hash = (await createHash(password,
        salt + process.env.HASH_PEPPER,
        parseInt(process.env.HASH_ITERATIONS),
        parseInt(process.env.HASH_LENGTH),
        process.env.HASH_ALGORITHM)).toString("hex");
    return {hash, salt: usedSalt};
};

module.exports = hashAndSalt;

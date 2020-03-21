exports.checkAuthorized = (auth, admin = false) => {
    if (auth.verified === true) {
        if (admin === false || auth.admin === true) {
            return true;
        }
    }
    const error = new Error("Auth failed");
    error.status = 401;
    throw error;
};

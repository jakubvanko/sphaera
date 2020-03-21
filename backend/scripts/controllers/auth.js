const authError = new Error("Auth failed");
authError.status = 401;

exports.checkAuthorized = (auth, admin = false) => {
    if (auth.verified === true) {
        if (admin === false || auth.admin === true) {
            return true;
        }
    }
    throw authError;
};

exports.currentOrAdmin = (auth, id) => {
    if (auth.verified === true) {
        if (auth.user._id === id || auth.admin === true) {
            return true;
        }
    }
    throw authError;
};

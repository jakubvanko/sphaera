const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        match: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w+)+$"
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    }]
});

module.exports = mongoose.model("User", userSchema);

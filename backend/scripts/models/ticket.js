const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },
    area: {
        type: String,
        required: true,
        minlength: 1
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bought: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Ticket", ticketSchema);

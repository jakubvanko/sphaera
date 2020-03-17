const mongoose = require("mongoose");

const areaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    capacity: {
        type: Number,
        required: true,
        min: 0
    },
    reserved: {
        type: Number,
        default: 0,
        min: 0
    }
}, {
    _id: false
});

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    artist: {
        type: String,
        required: true,
        minlength: 1
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true,
        minlength: 5
    },
    areas: [areaSchema]
});

module.exports = mongoose.model("Event", eventSchema);

const mongoose = require("mongoose");
const Event = require("../models/event");

exports.createEvent = (artist, date, image, areas) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        artist,
        date,
        image,
        areas
    });
    return event.save();
};

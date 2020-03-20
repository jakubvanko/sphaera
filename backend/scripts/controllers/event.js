const mongoose = require("mongoose");

const Event = require("../models/event");

exports.getEvents = () => {
    return Event.find()
        .select("_id artist date image areas")
        .exec();
};

exports.getEvent = async (id) => {
    const event = await Event.findById(id)
        .select("_id artist date image areas")
        .exec();
    if (event === null) {
        const error = new Error("Event not found");
        error.status = 404;
        throw error;
    }
    return event;
};

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

exports.updateEvent = (id, properties) => {
    return Event.updateOne({_id: id}, {
        $set: properties
    })
        .exec();
};

exports.deleteEvent = (id) => {
    return Event.deleteOne({_id: id})
        .exec();
};

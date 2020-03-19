const router = require("express").Router();
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

const Event = require("../models/event");

// GET all events
router.get("/", async (req, res) => {
    const result = await Event.find()
        .select("_id artist date image areas")
        .exec();
    return res.status(200).json(result);
});

// POST (create) a new event
router.post("/", auth(true), async (req, res) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        artist: req.body.artist,
        date: req.body.date,
        image: req.body.image,
        areas: req.body.areas
    });
    const result = await event.save();
    return res.status(201).json(result);
});

// GET one event by ID
router.get("/:eventId", async (req, res) => {
    const eventId = req.params.eventId;
    const result = await Event.findById(eventId)
        .select("_id artist date image areas")
        .exec();
    if (result !== null) {
        return res.status(200).json(result);
    }
    return res.status(404).json({})
});

// Update one event by ID
router.patch("/:eventId", auth(true), async (req, res) => {
    const eventId = req.params.eventId;
    const updatedProperties = {};
    for (const value of ["artist", "date", "image", "areas"]) {
        if (req.body[value] != null) {
            updatedProperties[value] = req.body[value]
        }
    }
    await Event.updateOne({_id: eventId}, {
        $set: updatedProperties
    })
        .exec();
    return res.status(204).json();
});

// Delete one event by ID
router.delete("/:eventId", auth(true), async (req, res) => {
    const eventId = req.params.eventId;
    await Event.deleteOne({_id: eventId})
        .exec();
    return res.status(204).json();
});

module.exports = router;

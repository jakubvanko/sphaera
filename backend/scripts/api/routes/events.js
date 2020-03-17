const router = require("express").Router();
const mongoose = require("mongoose");

const Event = require("../models/event");

// GET all events
router.get("/", (req, res, next) => {
    Event.find()
        .select("_id artist date image areas")
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(error => {
            next(error)
        });
});

// POST (create) a new event
router.post("/", (req, res, next) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        artist: req.body.artist,
        date: req.body.date,
        image: req.body.image,
        areas: req.body.areas
    });
    event.save()
        .then(result => res.status(201).json(result))
        .catch(error => {
            next(error)
        });
});

// GET one event by ID
router.get("/:eventId", (req, res, next) => {
    const eventId = req.params.eventId;
    Event.findById(eventId)
        .select("_id artist date image areas")
        .exec()
        .then(doc => {
            if (doc != null) {
                return res.status(200).json(doc);
            } else {
                return res.status(404).json({})
            }
        })
        .catch(error => {
            next(error)
        });
});

// Update one event by ID
router.patch("/:eventId", (req, res, next) => {
    const eventId = req.params.eventId;
    const updatedProperties = {};
    for (const value of ["artist", "date", "image", "areas"]) {
        if (req.body[value] != null) {
            updatedProperties[value] = req.body[value]
        }
    }
    Event.updateOne({_id: eventId}, {
        $set: updatedProperties
    })
        .exec()
        .then(result => res.status(204).json())
        .catch(error => {
            next(error)
        });
});

// Delete one event by ID
router.delete("/:eventId", (req, res, next) => {
    const eventId = req.params.eventId;
    Event.deleteOne({_id: eventId})
        .exec()
        .then(result => res.status(204).json())
        .catch(error => {
            next(error)
        });
});

module.exports = router;

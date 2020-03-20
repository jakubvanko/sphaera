const router = require("express").Router();
const auth = require("../middleware/auth");

const eventController = require("../controllers/event");

router.get("/", async (req, res) => {
    const result = await eventController.getEvents();
    return res.status(200).json(result);
});

router.get("/:eventId", async (req, res) => {
    const result = await eventController.getEvent(req.params.eventId);
    return res.status(200).json(result);
});

router.post("/", auth.authorized(true), async (req, res) => {
    const {artist, date, image, areas} = req.body;
    const result = await eventController.createEvent(artist, date, image, areas);
    return res.status(201).json(result);
});

// Update one event by ID
router.patch("/:eventId", auth.authorized(true), async (req, res) => {
    const updatedProperties = {};
    for (const value of ["artist", "date", "image", "areas"]) {
        if (req.body[value] !== null && req.body[value] !== undefined) {
            updatedProperties[value] = req.body[value]
        }
    }
    await eventController.updateEvent(req.params.eventId, updatedProperties);
    return res.status(204).json();
});

// Delete one event by ID
router.delete("/:eventId", auth.authorized(true), async (req, res) => {
    await eventController.deleteEvent(req.params.eventId);
    return res.status(204).json();
});

module.exports = router;

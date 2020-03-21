const router = require("express").Router();
const auth = require("../middleware/auth");

const eventController = require("../controllers/event");

/*
    Routes to get all events
 */
router.get("/", async (req, res) => {
    const result = await eventController.getEvents();
    return res.status(200).json(result);
});

/*
    Route to create an event
 */
router.post("/", auth.authorized(true), async (req, res) => {
    const {artist, date, image, areas} = req.body;
    const result = await eventController.createEvent(artist, date, image, areas);
    return res.status(201).json(result);
});

/*
    Routes to get, modify, or delete an event by id
 */
router.get("/:eventId", async (req, res) => {
    const result = await eventController.getEvent(req.params.eventId);
    return res.status(200).json(result);
});

router.patch("/:eventId", auth.authorized(true), async (req, res) => {
    await eventController.updateEvent(req.params.eventId, req.body);
    return res.status(204).json();
});

router.delete("/:eventId", auth.authorized(true), async (req, res) => {
    await eventController.deleteEvent(req.params.eventId);
    return res.status(204).json();
});

module.exports = router;

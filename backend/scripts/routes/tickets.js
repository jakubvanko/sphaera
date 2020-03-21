const router = require("express").Router();
const auth = require("../middleware/auth");

const ticketController = require("../controllers/ticket");

/*
    Route to buy a ticket
 */
router.post("/", auth.authorized(), async (req, res) => {
    const ticket = await ticketController.buyTicket(req.auth.user, req.body.event, req.body.area);
    return res.status(200).json(ticket);
});

module.exports = router;

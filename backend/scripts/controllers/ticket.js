const mongoose = require("mongoose");

const Ticket = require("../models/ticket");
const eventController = require("./event");

exports.buyTicket = async (user, eventId, areaName) => {
    const event = await eventController.getEvent(eventId);
    // Check event date
    if (event.date < Date.now()) {
        const error = new Error("Event has ended");
        error.status = 409;
        throw error;
    }
    // Get ticket area
    const eventArea = (() => {
        for (const eventArea of event.areas) {
            if (eventArea.name === areaName) {
                return eventArea;
            }
        }
        const error = new Error("Area not found");
        error.status = 404;
        throw error;
    })();
    // Check area capacity
    if (eventArea.reserved >= eventArea.capacity) {
        const error = new Error("Capacity filled");
        error.status = 409;
        throw error;
    }
    // Check user funds
    if (user.funds < eventArea.price) {
        const error = new Error("Not enough funds");
        error.status = 402;
        throw error;
    }
    // Update event capacity
    eventArea.reserved += 1;
    await event.save();
    // Generate new ticket
    const ticket = new Ticket({
        _id: new mongoose.Types.ObjectId(),
        event: eventId,
        area: eventArea.name,
        price: eventArea.price,
        owner: user._id,
        bought: Date.now()
    });
    const ticketResult = await ticket.save();
    // Update user funds and tickets
    user.funds -= eventArea.price;
    user.tickets.push(ticketResult._id);
    await user.save();
    // Return created ticket
    // TODO: send the ticket to email in PDF
    return ticketResult;
};

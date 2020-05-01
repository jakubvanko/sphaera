const mongoose = require("mongoose");

const Ticket = require("../models/ticket");
const eventController = require("./event");
const pdfLib = require("../configurations/pdflib");
const sendMail = require("../configurations/nodemailer");
const ticketPurchase = require("../emails/ticketPurchase");

const sendTicketMail = async (ticket, event, user) => {
    const ticketBytes = await pdfLib.createTicket(ticket._id.toString(), event.artist, event.date, ticket.area);
    await sendMail({
        to: user.email,
        subject: `Ticket to a show by ${event.artist}`,
        html: ticketPurchase(user.firstName, user.lastName, event.artist, event.date, ticket.bought, ticket.price),
        attachments: [{
            filename: "ticket.pdf",
            content: ticketBytes
        }]
    });
};

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
    // Create a ticket PDF file
    await sendTicketMail(ticketResult, event, user);
    return ticketResult;
};

exports.getTicket = async (user, ticketId) => {
    if (!user.tickets.some(id => id.toString() === ticketId)) {
        const error = new Error("Auth failed");
        error.status = 401;
        throw error;
    }
    const ticket = await Ticket.findById(ticketId)
        .exec();
    const event = await eventController.getEvent(ticket.event);
    await sendTicketMail(ticket, event, user);
    return ticket;
};

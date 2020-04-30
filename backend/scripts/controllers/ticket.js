const mongoose = require("mongoose");
const QRCode = require("qrcode");
const pdfLib = require("pdf-lib");
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const createQRCode = util.promisify(QRCode.toDataURL);

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
    // Create ticket PDF file
    const uint8Array = await readFile("./assets/ticket.pdf");
    const pdfTicket = await pdfLib.PDFDocument.load(uint8Array);
    const pages = pdfTicket.getPages();
    // PDF ticket dimensions are 612 x 206 (height has 8 bottom margin taken into account)
    const firstPage = pages[0];
    const qrCode = await createQRCode(ticketResult._id.toString(), {
        errorCorrectionLevel: "H",
        scale: 3,
        margin: 0,
        color: {
            dark: "#333333ff",
            light: "#11111100"
        }
    });
    const image = await pdfTicket.embedPng(qrCode);
    firstPage.drawImage(image, {
        x: 529 - image.width / 2,
        y: 107 - image.height / 2,
        width: image.width,
        height: image.height,
    });
    const pdfBytes = await pdfTicket.save();
    fs.writeFileSync("./assets/ticket28.pdf", pdfBytes); // TODO: make it async
    // send mail and remove the ticket afterwards

    // TODO: send the ticket to email in PDF
    return ticketResult;
};

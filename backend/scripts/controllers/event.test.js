const mongoose = require("mongoose");
require("dotenv").config();

const eventController = require("./event");
const Event = require("../models/event");

describe("Event controller test", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.TEST_DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        await Event.deleteMany({});
    });

    beforeEach(async () => {
        await Event.deleteMany({});
    });

    afterAll(async () => {
        await Event.deleteMany({});
        await mongoose.connection.close();
    });

    const createTestEvent = async () => await eventController.createEvent("Troye Sivan", "2035-12-27", "test.jpg", [{
        name: "areaName",
        price: 15.55,
        capacity: 12,
        reserved: 1
    }]);
    const validateTestEvent = (event) => {
        expect(event).toMatchObject({
            artist: "Troye Sivan",
            image: "test.jpg",
        });
        expect(event.areas[0]).toMatchObject({
            name: "areaName",
            price: 15.55,
            capacity: 12,
            reserved: 1
        })
    };

    describe("createEvent(artist, date, image, areas)", () => {
        test("throws an error due to no arguments", async () => {
            await expect(eventController.createEvent())
                .rejects
                .toThrow();
        });
        test("throws an error due to invalid arguments", async () => {
            await expect(eventController.createEvent(87, "7.Sep.2002", {}, "cat"))
                .rejects
                .toThrow();
        });
        test("creates and returns event successfully", async () => {
            const event = await createTestEvent();
            validateTestEvent(event);
        });
    });

    describe("getEvent(id)", () => {
        test("throws an error due to no arguments", async () => {
            await expect(eventController.getEvent())
                .rejects
                .toThrow();
        });
        test("throws an error due to invalid ID", async () => {
            await expect(eventController.getEvent("fasbasiofb"))
                .rejects
                .toThrow();
        });
        test("correctly returns an event", async () => {
            const createdEvent = await createTestEvent();
            const returnedEvent = await eventController.getEvent(createdEvent._id);
            validateTestEvent(returnedEvent);
        });
    });

    describe("updateEvent(id, properties)", () => {
        test("correctly updates and returns an event", async () => {
            const createdEvent = await createTestEvent();
            const updatedEvent = await eventController.updateEvent(createdEvent._id, {
                artist: "Marcus & Martinus"
            });
            expect(updatedEvent.artist).toMatch("Marcus & Martinus");
            const returnedEvent = await eventController.getEvent(createdEvent._id);
            expect(returnedEvent.artist).toMatch("Marcus & Martinus");
        });
    });

    test("deleteEvent(id) deletes and returns an event", async () => {
        const createdEvent = await createTestEvent();
        const deletedEvent = await eventController.deleteEvent(createdEvent._id);
        validateTestEvent(deletedEvent);
        await expect(eventController.getEvent(deletedEvent._id))
            .rejects
            .toThrow();
    });

    test("getEvents() returns an array of events", async () => {
        expect(Array.isArray(await eventController.getEvents())).toBe(true);
    });
});

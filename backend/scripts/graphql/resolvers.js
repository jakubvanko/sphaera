const eventController = require("../controllers/event");
const userController = require("../controllers/user");
const authController = require("../controllers/auth");
const ticketController = require("../controllers/ticket");
const uploadController = require("../controllers/upload");

const createResponse = async (toTry) => {
    const result = {success: true};
    try {
        await toTry(result);
    } catch (e) {
        result.success = false;
    }
    return result;
};

module.exports = {
    Query: {
        events: () => createResponse(async result => {
            result.events = await eventController.getEvents();
        }),
        event: (obj, args) => createResponse(async result => {
            result.event = eventController.getEvent(args._id);
        }),
        user: (obj, args, context) => createResponse(async result => {
            authController.currentOrAdmin(context.auth, args._id);
            result.user = await userController.getUser(args._id);
        }),
        ticket: (obj, args, context) => createResponse(async result => {
            authController.checkAuthorized(context.auth);
            result.ticket = await ticketController.getTicket(context.auth.user, args._id);
        })
    },
    Mutation: {
        createEvent: (obj, args, context) => createResponse(async result => {
            authController.checkAuthorized(context.auth, true);
            result.event = await eventController.createEvent(args.artist, args.date, args.image, args.areas);
        }),
        updateEvent: (obj, args, context) => createResponse(async result => {
            authController.checkAuthorized(context.auth, true);
            result.event = await eventController.updateEvent(args._id, args);
        }),
        deleteEvent: (obj, args, context) => createResponse(async result => {
            authController.checkAuthorized(context.auth, true);
            result.event = await eventController.deleteEvent(args._id);
        }),
        createUser: (obj, args) => createResponse(async result => {
            const {firstName, lastName, email, password} = args;
            result.user = await userController.createUser(firstName, lastName, email, password);
        }),
        updateUser: (obj, args, context) => createResponse(async result => {
            authController.currentOrAdmin(context.auth, args._id);
            result.user = await userController.updateUser(args._id, args);
        }),
        deleteUser: (obj, args, context) => createResponse(async result => {
            authController.currentOrAdmin(context.auth, args._id);
            result.user = await userController.deleteUser(args._id);
        }),
        loginUser: (obj, args) => createResponse(async result => {
            result.token = await userController.loginUser(args.email, args.password);
        }),
        resetPassword: (obj, args) => createResponse(async () => {
            await userController.resetPassword(args.email);
        }),
        buyTicket: (obj, args, context) => createResponse(async result => {
            authController.checkAuthorized(context.auth);
            result.ticket = await ticketController.buyTicket(context.auth.user, args.event, args.area);
        }),
        singleUpload: (obj, args, context) => createResponse(async result => {
            authController.checkAuthorized(context.auth, true);
            result.name = await uploadController.uploadImage(args.file);
        })
    }
};

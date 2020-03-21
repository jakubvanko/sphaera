const eventController = require("../controllers/event");
const userController = require("../controllers/user");
const authController = require("../controllers/auth");
const ticketController = require("../controllers/ticket");

const resolvers = {
    Query: {
        events: () => eventController.getEvents(),
        event: (obj, args) => eventController.getEvent(args._id),
        user: (obj, args, context) => {
            authController.currentOrAdmin(context.auth, args._id);
            return userController.getUser(args._id);
        }
    },
    Mutation: {
        createEvent: async (obj, args, context) => {
            authController.checkAuthorized(context.auth, true);
            await eventController.createEvent(args.artist, args.date, args.image, args.areas);
        },
        updateEvent: async (obj, args, context) => {
            authController.checkAuthorized(context.auth, true);
            await eventController.updateEvent(args._id, args);
        },
        deleteEvent: async (obj, args, context) => {
            authController.checkAuthorized(context.auth, true);
            await eventController.deleteEvent(args._id);
        },
        createUser: async (obj, args) => {
            const {firstName, lastName, email, password} = args;
            await userController.createUser(firstName, lastName, email, password);
        },
        updateUser: async (obj, args, context) => {
            authController.currentOrAdmin(context.auth, args._id);
            await userController.updateUser(args._id, args);
        },
        deleteUser: async (obj, args, context) => {
            authController.currentOrAdmin(context.auth, args._id);
            await userController.deleteUser(args._id);
        },
        loginUser: async (obj, args) => {
            const token = await userController.loginUser(args.email, args.password);
        },
        resetPassword: async (obj, args) => {
            await userController.resetPassword(args.email);
        },
        buyTicket: async (obj, args, context) => {
            authController.checkAuthorized(context.auth);
            await ticketController.buyTicket(context.auth.user, args.event, args.area);
        }
    }
};

module.exports = resolvers;

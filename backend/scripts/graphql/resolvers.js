const EventController = require("../controllers/event");
const UserController = require("../controllers/user");

const resolvers = {
    Query: {
        events: () => EventController.getEvents(),
        event: (obj, args) => EventController.getEvent(args._id),
        user: (obj, args, context) => UserController.getUser(args._id, context.req)
    },

};

module.exports = resolvers;

const express = require("express");
// Handle async errors without try and catch blocks
require("express-async-errors");
const app = express();
const path = require("path");

const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const auth = require("./middleware/auth");

// Middleware for GraphQL and REST
app.use(helmet());
app.use(cors());
app.use(auth.loadAuthData({tokenSecret: process.env.TOKEN_SECRET}));

// GraphQL
const apolloServer = require("./graphql/apollo");
apolloServer.applyMiddleware({app});

// Middleware for REST
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use("/api/uploads", require("./routes/uploads"));
app.use('/api/uploads', express.static(path.join(__dirname, "../uploads")));
app.use("/api/events", require("./routes/events"));
app.use("/api/users", require("./routes/users"));
app.use("/api/tickets", require("./routes/tickets"));

// Default route
app.use(() => {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
});

// Error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;

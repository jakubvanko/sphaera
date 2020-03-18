const express = require("express");
// Handle async errors without try and catch blocks
require('express-async-errors');
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Routes
app.use("/uploads", require("./api/routes/uploads"));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use("/events", require("./api/routes/events"));
app.use("/users", require("./api/routes/users"));

// Default route
app.use((req, res, next) => {
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

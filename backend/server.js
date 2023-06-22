require("dotenv").config();
const mongoose = require("mongoose");
const http = require("http");
const app = require("./scripts/app");

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const server = http.createServer(app);

server.listen(process.env.PORT || 4001);

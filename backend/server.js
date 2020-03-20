require("dotenv").config();
const http = require("http");
const app = require("./scripts/app");

const server = http.createServer(app);

server.listen(process.env.PORT);

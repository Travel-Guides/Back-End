const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const guidesRouters = require("../routers/guides/guides-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);

// No Login required
server.use("/api/auth", guidesRouters);

server.get("/", (req, res) => {
  res.send({ message: "It's alive!" });
});

module.exports = server;

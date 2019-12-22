const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const guidesRouter = require("../routers/guides/guides-router.js");
const touristsRouter = require("../routers/tourists/tourists-router.js");
const tripsRouter = require("../routers/trips/trips-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/trips", tripsRouter);

// No Login required
server.use("/api/auth", guidesRouter);
server.use("/api/auth", touristsRouter);

server.get("/", (req, res) => {
  res.send({ message: "It's alive!" });
});

module.exports = server;

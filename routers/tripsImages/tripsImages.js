const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Public Folder
router.use(express.static("../public"));

router.get("/", (req, res) => res.render("index"));

module.exports = router;

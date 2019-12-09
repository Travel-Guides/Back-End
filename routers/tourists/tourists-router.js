const express = require("express");

const Tourist = require("./tourists-model.js");

const router = express.Router();

router.get("/tourists", (req, res) => {
  Tourist.find()
    .then(tourist => {
      res.json(tourist);
    })
    .catch(err => res.send(err));
});

router.get("/tourists/:id", (req, res) => {
  const { id } = req.params;
  Tourist.findById(id)
    .then(tourist => {
      res.status(200).json(tourist);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get tourists" });
    });
});

module.exports = router;

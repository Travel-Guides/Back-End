const express = require("express");

const Guides = require("./guides-model.js");
const authenticate = require("../../auth/restricted-middleware.js");

const router = express.Router();

router.get("/guides", (req, res) => {
  Guides.find()
    .then(guides => {
      res.json(guides);
    })
    .catch(err => res.send(err));
});

router.get("/guides/:id", (req, res) => {
  const { id } = req.params;
  Guides.findById(id)
    .then(guide => {
      res.status(200).json(guide);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get guides" });
    });
});

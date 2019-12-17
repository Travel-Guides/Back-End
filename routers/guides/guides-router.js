const express = require("express");

const Guides = require("./guides-model.js");
const Trips = require("../trips/trips-model.js");
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

router.get("/guides/:id/trips", authenticate, (req, res) => {
  const { id } = req.params;

  Trips.getTripsByGuideId(id)
    .then(list => {
      if (list.length) {
        res.status(200).json(list);
      } else {
        res
          .status(404)
          .json({ message: "Could not find list for given scheme " });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// router.post("/guides/:id/trips", authenticate, (req, res) => {
//   const { id } = req.params;

//   console.log(id);
//   Trips.addTripsByGuideId(req.body, id)
//     .then(trips => res.status(200).json(trips))
//     .catch(err => res.status(500).json({ message: err.message }));
// });

module.exports = router;

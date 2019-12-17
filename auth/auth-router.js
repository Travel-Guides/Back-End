const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// MODELS
const Guides = require("../routers/guides/guides-model.js");
const Tourists = require("../routers/tourists/tourists-model.js");

// TOKEN
const guidesToken = require("./token/guides-token.js");
const touristToken = require("./token/tourist-token.js");

// VALIDATION
const { validateUser } = require("./validate-user.js");

// ***** GUIDES ***** //

router.post("/guides/register", (req, res) => {
  let user = req.body;
  const validateResult = validateUser(user);
  console.log(validateResult);

  if (validateResult.isSuccessful === true) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    console.log(user);

    Guides.add(user)
      .then(saved => {
        console.log("add result", saved);
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "Invalid user input, see errors for details",
      error: validateResult.errors
    });
  }
});

router.post("/guides/login", (req, res) => {
  let { username, password } = req.body;

  Guides.findBy({ username })
    .first()
    .then(guide => {
      if (guide && bcrypt.compareSync(password, guide.password)) {
        const token = guidesToken(guide.username);

        res.status(200).json({
          subject: `Hello ${guide.username}, here's a token.`,
          token
        });
      } else {
        res.status(401).json({ message: "Please provide correct credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// ***** TOURISTS ***** //

module.exports = router;

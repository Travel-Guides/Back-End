const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  }
});

// ***** TOURISTS ***** //

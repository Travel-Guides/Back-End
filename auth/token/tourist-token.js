const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateTouristToken(tourist) {
  const payload = {
    subject: tourist.id,
    email: tourist.email,
    type: "tourist"
  };

  const secret = process.env.JWT_SECRET;

  const options = { expiresIn: "1d" };

  return jwt.sign(payload, secret, options);
}

module.exports = generateTouristToken;

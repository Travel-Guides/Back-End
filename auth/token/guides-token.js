const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateGuidesToken(guide) {
  const payload = {
    subject: guide.id,
    email: guide.email,
    type: "guide"
  };

  const secret = process.env.JWT_SECRET;

  const options = { expiresIn: "1d" };

  return jwt.sign(payload, secret, options);
}

module.exports = generateGuidesToken;

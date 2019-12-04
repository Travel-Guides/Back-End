const jwt = require("jsonwebtoken");

function generateGuidesToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    type: "guide"
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = { expiresIn: "1d" };

  return jwt.sign(payload, secret, options);
}

module.exports = generateGuidesToken;

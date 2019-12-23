const jwt = require("jsonwebtoken");

function generateTouristToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    type: "tourist"
  };

  const secret = process.env.JWT_SECRET;

  const options = { expiresIn: "1d" };

  return jwt.sign(payload, secret, options);
}

module.exports = generateTouristToken;

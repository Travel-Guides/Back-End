const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Bad one!" });
      } else {
        if (decodedToken.type === "guide") {
          req.decodedJwt = decodedToken;
          next();
        } else if (decodedToken.type === "tourist") {
          req.decodedJwt = decodedToken;
          next();
        } else {
          res.status(400).json({ message: "Wrong user type" });
        }
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};

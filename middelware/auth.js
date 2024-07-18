const jwt = require("jsonwebtoken");

const authorise = (req, res, next) => {
  const token = req.header("Authorization");
  const bearerword = token.split(" ")[0].trim();
  const bearertoken = token.split(" ")[1];
  if (bearerword !== "Bearer") {
    return res.status(401).send("Access denied. Invalid token.");
  }
  if (!bearertoken) {
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const decoded = jwt.verify(bearertoken, "Key");
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};

module.exports = authorise;

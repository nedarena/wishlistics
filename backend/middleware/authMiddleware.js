const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401); // No token provided

  const token = authHeader.split(' ')[1]; // Extract the token from the header
  if (!token) return res.sendStatus(401); // Token not present

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.sendStatus(403); // Invalid or expired token
    req.userId = payload.userId; // Add userId to request object
    next(); // Continue to the next middleware
  });
};
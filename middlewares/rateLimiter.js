const rateLimit = require('express-rate-limit');

const rateLimiter = (req, res, next) => {
  rateLimit({
    windowMs: 15 * 60 * 1000, // 24 hrs in milliseconds
    max: 10,
    message: 'You have exceeded the 100 requests in 24 hrs limit!', 
    standardHeaders: true,
    legacyHeaders: false,
  });
  next()
}
module.exports = {rateLimiter};
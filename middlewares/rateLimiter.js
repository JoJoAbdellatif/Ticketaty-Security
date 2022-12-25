const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 24 hrs in milliseconds
  max: 3,
  message: 'You have exceeded the 100 requests in 24 hrs limit!'
});

module.exports = {rateLimiter};

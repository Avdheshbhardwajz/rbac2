import rateLimit from 'express-rate-limit';

export const weatherRateLimiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: 1, // limit each IP to 1 request per windowMs
  message: 'Too many requests, please try again later.',
});

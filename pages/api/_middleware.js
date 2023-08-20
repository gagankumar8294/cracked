import rateLimiterMiddleware from '../../middleware/rateLimiter';

export default function applyRateLimiter(req, res, next) {
    rateLimiterMiddleware(req, res, next);
  }
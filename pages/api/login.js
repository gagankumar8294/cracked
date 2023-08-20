import { google } from 'googleapis';

const googleClient = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token } = req.body;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    // Here, you can handle the user verification and database operations
    // For example, check if the user exists in your database or create a new user account.

    return res.status(200).json({ user: payload });
  } catch (error) {
    console.error('Error during Google token verification:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}



// import { google } from 'googleapis';

// const googleClient = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
// );

// // This object will store the number of requests per IP and their timestamps
// const requestStore = {};

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { token } = req.body;

//   try {
//     // Apply rate limiting
//     const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     const currentTime = Date.now();

//     // Remove expired entries from the requestStore
//     for (const ip in requestStore) {
//       if (currentTime - requestStore[ip].timestamp > rateLimitWindowMs) {
//         delete requestStore[ip];
//       }
//     }

//     // Check if the IP has exceeded the request limit
//     const requestsForIp = requestStore[clientIp] || 0;
//     if (requestsForIp >= maxRequestsPerWindow) {
//       return res.status(429).json({ error: 'Too many requests. Please try again later.' });
//     }

//     // Increment the request count for the IP
//     requestStore[clientIp] = {
//       count: requestsForIp + 1,
//       timestamp: currentTime,
//     };

//     // Google token verification and user handling
//     // ... (same as before) ...
//   } catch (error) {
//     console.error('Error during Google token verification:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
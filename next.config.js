module.exports = {
  env: {
    GOOGLE_CLIENT_ID: '161900170859-oar20kjgasosnaggisba47lqkkbj51s7.apps.googleusercontent.com',
  },
    serverMiddleware: [
      { path: '/api', handler: 'pages/api/_middleware' },
    ],
  };
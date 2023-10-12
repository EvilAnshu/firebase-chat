// config/envConfig.js

require('dotenv').config();

const env = process.env;

module.exports = {
  PORT: env.PORT || 3000, // You can specify the default port or use the one from the environment
  FIREBASE_API_KEY: env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: env.FIREBASE_APP_ID,
  // Add more environment variables as needed
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCFtgySHwsbTMXKrNCuPd3m1K5om7bY7DM",
//   authDomain: "chat-e47d8.firebaseapp.com",
//   projectId: "chat-e47d8",
//   storageBucket: "chat-e47d8.appspot.com",
//   messagingSenderId: "628855875917",
//   appId: "1:628855875917:web:4731b32e979028367def04",
//   measurementId: "G-FWS97FVB6T"
// };




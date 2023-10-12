// chat-app-backend/config/firebaseAdminConfig.js

const admin = require('firebase-admin');
const serviceAccount = require('../config/chat-e47d8-firebase-adminsdk-e07k2-835d267886.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-e47d8-default-rtdb.firebaseio.com', // Replace with your Firebase database URL
});

module.exports = admin;

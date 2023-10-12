const firebase = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCFtgySHwsbTMXKrNCuPd3m1K5om7bY7DM",
  authDomain: "chat-e47d8.firebaseapp.com",
  projectId: "chat-e47d8",
  storageBucket: "chat-e47d8.appspot.com",
  messagingSenderId: "628855875917",
  appId: "1:628855875917:web:4731b32e979028367def04",
  measurementId: "G-FWS97FVB6T"
};

// Initialize the Firebase Client SDK
const app = firebase.initializeApp(firebaseConfig);

// Access Firestore
const db = getFirestore(app);

module.exports = { firebase, db };

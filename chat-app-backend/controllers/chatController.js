// chat-app-backend/controllers/chatController.js

const { db } = require('../config/firebaseAdminConfig');
const { Timestamp } = require('firebase-admin').firestore;
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const messagesCollection = collection(db, 'messages');

async function sendMessage(req, res) {
  const { text, userId } = req.body;
  const timestamp = Timestamp.now();
  const newMessage = { text, userId, timestamp };

  try {
    await addDoc(messagesCollection, newMessage);
    res.status(201).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Message sending failed');
  }
}

async function getMessages(req, res) {
  try {
    const querySnapshot = await getDocs(messagesCollection);
    const messages = [];

    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error getting messages:', error);
    res.status(500).send('Error getting messages');
  }
}

module.exports = { sendMessage, getMessages };

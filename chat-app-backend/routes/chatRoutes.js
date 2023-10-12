// chat-app-backend/routes/chatRoutes.js

const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/send-message', chatController.sendMessage);
router.get('/get-messages', chatController.getMessages);

module.exports = router;

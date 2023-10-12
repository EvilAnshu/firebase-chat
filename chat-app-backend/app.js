const express = require('express');
const app = express();
const envConfig = require('./config/envConfig'); // Import the environment configuration
const { db } = require('./config/firebaseConfig');

// Middleware configuration (body parser, CORS, etc.)

// Custom middleware function
const customMiddleware = (req, res, next) => {
  console.log('This is custom middleware.');
  next(); // Don't forget to call next() to pass control to the next middleware or route.
};

app.use(customMiddleware); // Use the custom middleware

// Routes configuration
// app.use('/auth', require('./routes/authRoutes'));
app.use('/chat', require('./routes/chatRoutes'));

// Error handling middleware

module.exports = app;

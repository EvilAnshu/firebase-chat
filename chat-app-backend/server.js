// chat-app-backend/server.js

const app = require('./app'); // Import your Express app
const envConfig = require('./config/envConfig'); // Import the environment configuration
const { db } = require('./config/firebaseConfig'); // Import the Firestore instance

const port = envConfig.PORT || 3000;

// Wait for Firebase initialization to complete
db.settings({ timestampsInSnapshots: true });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

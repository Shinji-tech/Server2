const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = (`mongodb+srv://ITChat:wP6cGl6K4nlwBH0K@cluster0.djnpa7q.mongodb.net/?retryWrites=true&w=majority`);

//Connect to MongoDB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  // Get the default connection
  const db = mongoose.connection;
  
  // Event listeners for connection status
  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('Connected to MongoDB');
    
  });
  
  db.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });
  
  // Gracefully close the connection on process termination
  process.on('SIGINT', () => {
    db.close(() => {
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });
  });
const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.djnpa7q.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
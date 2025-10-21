const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Cors stuff
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Connect to MongoDB
require('./models/db');

// Middleware to parse JSON
app.use(express.json());

// Import routes
const routes = require('./routes');
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

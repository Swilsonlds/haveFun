const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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

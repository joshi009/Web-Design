// Import express module
const express = require('express');

// Create an Express application
const app = express();

// Set the port to listen on (default is 3000)
const port = 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

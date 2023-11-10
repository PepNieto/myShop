const express = require('express')
const app = express();
require('./db')
app.listen(3000);
console.log("Server is running on port 3000");

// Serve static files from the public directory
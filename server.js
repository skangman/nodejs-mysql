// index.js

const express = require('express');
const bodyParser = require('body-parser');
// const Userinfo = require('./routes/api');

const api = require('./routes/api');

const app = express();
const port = 3000;


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', api);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 10443;

// Middleware to serve static files
app.use('/assets', (req, res, next) => {
    console.log(`Request for static asset: ${req.url}`);
    next();
});
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`); // Log the requested URL
    
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else if (req.url.startsWith('/assets/')) {
        const filePath = path.join(__dirname, req.url);
        console.log(`Attempting to serve: ${filePath}`); // Log the resolved file path
        const contentType = mime.getType(filePath) || 'application/octet-stream';

        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.log(`File not found: ${filePath}`); // Log the error for missing files
                res.writeHead(404);
                res.end('Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 10443;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


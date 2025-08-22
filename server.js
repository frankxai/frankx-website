const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.md': 'text/markdown'
};

// Create server
const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = `.${parsedUrl.pathname}`;

    // Default to index.html
    if (pathname === './') {
        pathname = './index.html';
    }

    // Check if it's an API request for markdown files
    if (pathname.startsWith('./api/content/')) {
        const mdFile = pathname.replace('./api/content/', './');
        
        fs.readFile(mdFile, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'File not found' }));
                return;
            }
            
            res.writeHead(200, { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(JSON.stringify({ content }));
        });
        return;
    }

    // Get file extension
    const ext = path.parse(pathname).ext || '.html';

    // Read file
    fs.readFile(pathname, (err, data) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 - File Not Found');
            return;
        }

        // Set content type
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
        res.end(data);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     🚀 FrankX Brand Dashboard Server Running! 🚀        ║
║                                                          ║
║     Open your browser and navigate to:                  ║
║     http://localhost:${PORT}                                ║
║                                                          ║
║     Press Ctrl+C to stop the server                     ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `);
});
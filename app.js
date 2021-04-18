const http = require('http');

const version = "v0.1"
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world, this is my ${version} try to js');
});

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
});


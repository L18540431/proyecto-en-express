const http = require('http');
const hostname = '192.168.1.48';
const port = 3008;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<p>Nayeli html</p>');
});

server.listen(port, hostname, () => {
    console.log(`el servidor se esta ejecutando en http://${hostname}:${port}`);
});
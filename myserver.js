import { route } from './MyRouter';

const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

module.exports = function start(port, hostname) {
    function onRequest(req, res) {
        let sPathname = url.parse(req.url).pathname;
        route(sPathname);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello World!');
        res.end();
    }
    http.createServer(onRequest).listen(nPort, sHost);
    console.log('Server running at http://' + sHost + ':' + nPort);
}



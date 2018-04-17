let nport = 8000;
let sHost = 'localhost';
const myServer = require('./myserver');
const myRouter = require('./MyRouter');

myServer.start(myRouter.route, handle);
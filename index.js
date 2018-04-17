let nPort = 8000; 
let sHost = 'localhost'; 
const myServer = require('./myserver'); 
const myRouter = require('./MyRouter'); 
const myHandlers = require('./MyHandlers'); 
 
 
let handle = {}; 
handle['/'] = myHandlers.start; 
handle['/start'] = myHandlers.start; 
handle['/hello'] = myHandlers.hello; 
myServer(nPort, sHost, myRouter.route, handle); 

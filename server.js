const http = require('http');
const app = require('./app.js');

const PORT = process.env.PORT || 8888;
let server = http.createServer(app);
server.on('error',e=>console.error('**error**',e.message));
server.listen(PORT,(e)=>console.log(`server listening at ${PORT}`));

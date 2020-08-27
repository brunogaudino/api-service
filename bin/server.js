const app = require('./app');
const http = require('http');

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
//Create error and listening validation
//server.on('error', onError);
//server.on('listening', onListening);
console.log('API running on port ' + port);


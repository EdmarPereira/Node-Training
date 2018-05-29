const app = require('../src/app')
const debug = require('debug')('balta:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError); // no caso de erro com o servidor a função on Error é chamada
server.on('listening', onListening);

console.log('Server Ok, using port ' + port);

// essa função busca a porta disponível para evitar problemas de portas em uso
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)){
        return val;
    }
    if (port > 0) {
        return port;
    }
    return false;
}

// essa função retorna posíveis erro do servidor como por exemplo porta em uso
function onError(error) {
    if (error.syscall != 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port' + port;
    switch (error.code) {
        case 'EACCES':
        console.error(bind + ' require elevated privileges');
        process.exit(1);
        break;
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
        default:
        throw error;
    }
}

// essa função será usada para debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port' + addr.port;
    debug('Listening on ' + bind); 
}

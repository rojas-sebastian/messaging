const server =  require('./server/server.js')

server.listen(8080);
console.log('Servidor escuchando en puerto ' + 8080);

server.on('error', err => {
    console.error(err);
});
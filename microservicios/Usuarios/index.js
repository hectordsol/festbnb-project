const server = require('./src/server');

PORT = 5002;

server.listen(PORT, ()=>{console.log(`Servidor Usuarios en puerto ${PORT}`)});
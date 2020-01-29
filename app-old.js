const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Conten-type': 'application/json' });

        let salida = {
            nombre: 'Richard',
            apellido: 'Hearn',
            edad: 24
        };

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');
/*
var http = require('http');

http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hola a todas y a todos!\n');
}).listen(8080);

console.log('Servidor ejecutándose en puerto 8080...');
*/
'use strict'
const express = require('express');

const app = express();

app.get('/hola', (request, response) => {
    response.send('Hola a todas y a todos desde Express!')
});

app.listen(8080, () => {
    console.log('API REST ejecutándose en http://localhost:8080/hola');
});

var dados = require('./exportNomeRGM');
var fs = require('fs');


var http = require('http');
var request = require('request');


http.createServer(function (req, res) {

    fs.readFile('matheus-rgm-33902976.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        return res.end();
    });
    
}).listen(8080);

console.log('Rodando no localhost:8080')    
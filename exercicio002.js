
var dados = require('./exportNomeRGM');


var http = require('http');
var request = require('request');


function retornaNomeRGM() {
    return `${dados.primeiroNome} ${dados.ultimoNome} ${dados.rgm} `;
}

http.createServer(function (req, res) {
    var sequenciaExecucao = ' => ' + retornaNomeRGM()
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sequenciaExecucao);
    res.end();
}).listen(8080);
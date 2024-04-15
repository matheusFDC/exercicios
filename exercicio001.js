const http = require('http');

const hostname = 'localhost';
const port = 8080;

moduloReservas = () => 'modulo Reservas (/reservasDeAssentos)';
moduloVendas = () => 'modulo Vendas (/vendasDeAssentos)';
moduloCatalogo = () => 'modulo de Catalogo de Assentos (/catalogoDeAssentos)';
moduloMilhagens = () => 'modulo Programa de Milhagens (/milhagens)';
moduloBaseRegistroClientes = () => 'modulo Base de Registro de Clientes (/baseRegistroClientes)';
pagmentosParceiro = () => 'microsservico Processamento de Pagamentos (/pagamentosParceiro)';
listagemClientesParceiro = () => 'microsservico Listagem de Clientes (Parceiro)(/listagemClientesParceiro)';


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        const endpoints = [
            moduloReservas(),
            moduloVendas(),
            moduloCatalogo(),
            moduloMilhagens(),
            moduloBaseRegistroClientes(),
            pagmentosParceiro(),
            listagemClientesParceiro()
        ];

        res.end(endpoints.join('\n'));
    } else if (req.url === '/reservasDeAssentos') {
        res.end('Modulo Reservas de Assentos');
    } else if (req.url === '/vendasDeAssentos') {
        res.end('Modulo Vendas de Assentos');
    } else if (req.url === '/catalogoDeAssentos') {
        res.end('Modulo Catalogo de Assentos');
    } else if (req.url === '/milhagens') {
        res.end('Modulo Programa de Milhagens');
    } else if (req.url === '/registroClientes') {
        res.end('Modulo Base de Registro de Clientes');
    } else if (req.url === '/pagamentosParceiro') {
        res.end('Microsservico Processamento de Pagamentos');
    } else if (req.url === '/listagemClientesParceiro') {
        res.end('Microsservico Listagem de Clientes');
    } else if (req.url === '/moduloReservas') {
        res.end(moduloReservas());
    } else if (req.url === '/moduloVendas') {
        res.end(moduloVendas());
    } else if (req.url === '/moduloCatalogo') {
        res.end(moduloCatalogo());
    } else if (req.url === '/moduloMilhagens') {
        res.end(moduloMilhagens());
    } else if (req.url === '/moduloBaseRegistroClientes') {
        res.end(moduloBaseRegistroClientes());
    } else if (req.url === '/pagmentosParceiro') {
        res.end(pagmentosParceiro());
    } else if (req.url === '/listagemClientesParceiro') {
        res.end(listagemClientesParceiro());
    } else {
        res.end('Endpoint nao encontrado');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
}); 
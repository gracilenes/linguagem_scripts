const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello, World!');
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

// Crie um servidor que retorne um JSON com informações sobre você.
// exemplo de resposta

JSON.stringify()
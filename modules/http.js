//Usando apenas o http do Nodejs
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1 >Hello World</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        nome: "John Doe",
        email: "john@doe.com",
      },
      {
        nome: "Jane Doe",
        email: "jane@doe.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`🚀 Servidor Rodando na porta ${port}!`));

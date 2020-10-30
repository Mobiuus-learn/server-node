const http = require("http"); // importa o módulo HTTP 

const host = "localhost"            //define o host
const port = "8000"             //defina a porta 

const requestListener = (req, res)=>{   // escuta as solicitaçoes http
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200);
    res.end(`
    <html><body><h1>This is HTML</h1></body></html>
    `);
}
const server = http.createServer(requestListener);   // cria o server
server.listen(port, host, ()=>{
    console.log(`server rodando on em http://${host}:${port}`)
} )
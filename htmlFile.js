const { fstat } = require("fs");
const http = require("http"); // importa o módulo HTTP 
const { connected } = require("process");
const fl = require("fs").promises;

const host = "localhost";            //define o host
const port = "8000";            //defina a porta 
var indexFile;
const requestListener = (req, res)=>{   // escuta as solicitaçoes http
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
}
const server = http.createServer(requestListener);   // cria o server
    fl.readFile(__dirname + "/index.html")
        .then(contents =>{
            indexFile = contents;
            server.listen(port, host, ()=>{
            console.log(`server rodando on em http://${host}:${port}`)
            
            })
        })
        .catch(err =>{
            console.log(`Erro na leitura do arquivo file: ${err}`);
            process.exit(1);

        })
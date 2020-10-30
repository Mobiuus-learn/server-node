const http = require("http"); // importa o módulo HTTP 

const host = "localhost"            //define o host
const port = "8000"             //defina a porta 

const requestListener = (req, res)=>{   // escuta as solicitaçoes http
    res.setHeader("Content-Type", "text/csv")
    res.setHeader("Content-Disposition", "attachment;filename=oceanpal.csv")
    res.writeHead(200);
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
}
const server = http.createServer(requestListener);   // cria o server
server.listen(port, host, ()=>{
    console.log(`server rodando on em http://${host}:${port}`)
} )
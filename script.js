const http = require("http");

const server = http.createServer((req,res) => {
    res.end("hello from Node js serv");
});

server.listen(3000, () => {
    console.log("server running");
});


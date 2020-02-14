const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    if(req.method === "GET" && req.url === "/"){
        res.end("Home");
    } else if(req.method === "GET" && req.url === "/dashboard"){
        res.end("Dashboard");
    } else {
        res.end("N/A");
    }
});

server.listen(3000, ()=>{
    console.log("Server is running")
});
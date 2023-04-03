const http = require('http');
const port = process.env.port || 3000; // take the port from local environment if not found take 3000 port

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    console.log(req);
    res.statusCode =200;
    res.end('<h1>this is Tag97</h1><p> these is a para from hhtpserver-response</p>');
    console.log(req.url);
});
//Above the declaration for server on and what to response

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
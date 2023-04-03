const http = require('http');
const fs = require('fs');
const port = 4000; // take the port from local environment if not found take 3000 port

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    console.log(req);
    if(req.url == '/home'){
        res.statusCode =200;
        const a = fs.readFileSync('index.html')
        // console.log(a.toString());
        console.log('finished reading file');
        res.end(a.toString());
    }else if(req.url == '/aa'){ 
        res.statusCode = 200;
        res.end('<h1>AAAA </h1><p> aaaaaaaaaaaaaa</p>');
    }else if(req.url == '/about'){
        res.statusCode == 200;
        res.end('<h1>about us Tag97 </h1><p>About us......................</p>');
    }else{
        res.statusCode =404;
        res.end('<h1>Not Found </h1><p>Page not found.</p>');
    }
    
});
//Above the declaration for server on and what to response

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

const colors = require('chalk');
console.log("package".red);;